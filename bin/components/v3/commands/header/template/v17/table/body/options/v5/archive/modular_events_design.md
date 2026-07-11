# Technical Specification: Modular Table Row Options Events Folder

This document details the file structure and responsibilities of the `events/` subdirectory inside the Options component.

---

## 1. Directory Structure

Instead of using a single `hookEvents.js` file, all button click logic has been partitioned into separate modules inside a dedicated `events/` directory:

```
Public/ks/components/v14/table/body/options/v3/events/
├── index.js          # Unified entry point to attach event listeners
├── editClick.js      # Edit button click listener logic
├── cancelClick.js    # Cancel button click listener logic
├── updateClick.js    # Update button click listener logic
└── deleteClick.js    # Delete button click listener logic
```

---

## 2. File Responsibilities

### index.js
Binds the click handlers for the instantiated button elements to their respective event functions.

### editClick.js
* Toggles button visibility states.
* Saves static cell values in the `data-old-value` dataset.
* Clones footer input elements into the row cells.

### cancelClick.js
* Restores the row cells from their `data-old-value` attribute values.
* Resets button visibilities.

### updateClick.js
* Reads current input values.
* Replaces inputs with the newly typed text as static text nodes.
* Resets button visibilities.

### deleteClick.js
* Triggers the `onDeleteFunc` callback.
