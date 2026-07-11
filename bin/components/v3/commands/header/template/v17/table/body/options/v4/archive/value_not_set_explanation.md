# Explanation: Why the Value Was Not Set

This document explains why querying the inner `<input>` element inside `replaceCellWithFooterInput` failed to set the value, and how the attribute-based assignment resolves this behavior.

---

## The Issue

In the previous version, the code attempted to set the value like this:
```javascript
clonedInput.querySelector("input").value = td.dataset.oldValue;
```

* **Custom Element Lifecycle**: At this point in execution, `clonedInput` (which is a Web Component like `<ks-table-footer-input>`) is only in memory and has not yet been appended to the document body.
* **Child Nodes Not Rendered**: Because the element has not connected to the DOM, its `connectedCallback()` has not executed. Therefore, its internal DOM structure (including the nested native `<input>` element) does not exist yet.
* **Query Fails**: `clonedInput.querySelector("input")` returned `null` (or threw an error), and the value was never applied.

---

## The Solution

We assign properties directly to the parent Web Component `clonedInput` instead:
```javascript
const val = td.dataset.oldValue !== undefined ? td.dataset.oldValue : "";
clonedInput.setAttribute("ksInValue", val);
clonedInput.setAttribute("value", val);
clonedInput.value = val;
```

When the custom element is subsequently appended to the DOM (`td.replaceChildren(clonedInput)`), its `connectedCallback` is triggered. The component reads the values from these properties/attributes and applies them internally to the native input once it gets generated.
