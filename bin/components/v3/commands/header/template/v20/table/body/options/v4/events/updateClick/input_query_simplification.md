# Technical Specification: Native Input Query Simplification

This document explains the simplification of the DOM search logic when extracting and committing values inside `updateClick/start.js`.

---

## 1. Simplification Detail

Instead of querying for custom elements (`ks-table-footer-input`, `<ks-input>`) and checking multiple potential name attribute aliases, we query directly for the nested native HTML `<input>` element:

```javascript
const input = td.querySelector("input");
```

* **Name resolution**: Since all input elements are compiled to standard HTML forms, the field name maps directly to the standard `input.name` property.
* **Value resolution**: The value maps directly to `input.value`.

This reduces nesting and makes value retrieval completely uniform and robust.
