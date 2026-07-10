# Technical Specification: Pure Event Traversal for Click Handlers

This document details the refactoring of click handler signatures inside the `events/` subdirectory. Instead of passing all sibling button elements as function parameters, each click handler function reads its targets dynamically using the event target and DOM traversal (`event.currentTarget.closest`).

---

## 1. Minimal Signatures

Each event file only receives the browser `event` and the necessary component configuration (`options`):

* `editClick({ event, options })`
* `cancelClick({ event })`
* `updateClick({ event, options })`
* `deleteClick({ event, options })`

---

## 2. Dynamic Sibling Queries

Sibling buttons are resolved inside the function scope using class selectors on the parent action cell:
```javascript
const editBtn = actionsCell.querySelector("button.editButton");
const deleteBtn = actionsCell.querySelector("button.deleteButton");
const updateBtn = actionsCell.querySelector("button.updateButton");
const cancelBtn = actionsCell.querySelector("button.cancelButton");
```
This reduces function coupling and makes the code highly modular.
