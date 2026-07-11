# Technical Specification: Update Click Modular Folder

This document details the file structure and logic for the new `updateClick/` directory.

---

## 1. File Structure

```
Public/ks/components/v14/table/body/options/v3/events/updateClick/
├── index.js          # Entry point for the updateClick callback
└── start.js          # Logic to extract input values into a data object and revert cells
```

---

## 2. Extraction Logic (`start.js`)

When the Update button is clicked:
1. It queries all cells `<td>` in the row.
2. For each cell containing a custom input element:
   * It maps the input name (`ksname` or `name` attribute) to the input value (`input.value`).
   * It populates these key-value pairs into a single update object: `updatedItem`.
3. It prints the update object to the console:
   `console.log("Updated Row Data Object: ", updatedItem);`
4. It reverts the row inputs back to static text displaying the new values.
5. It toggles button visibilities back to the default state.

---
### History Update: 2026-07-04T15:35:00+05:30
#### Decoupled Orchestration Flow

We decoupled the `updateClick/start.js` logic into three modular sub-functions:
1. [extractRowData.js](file:///d:/KeshavSoftRepos/2026-07-04/QuotationV3/Public/ks/components/v14/table/body/options/v3/events/updateClick/extractRowData.js): Handles reading the current values of the `<input>` elements inside the row cells.
2. [revertRowToStaticText.js](file:///d:/KeshavSoftRepos/2026-07-04/QuotationV3/Public/ks/components/v14/table/body/options/v3/events/updateClick/revertRowToStaticText.js): Handles clearing the inputs and setting the static cell texts to the new values.
3. [toggleButtons.js](file:///d:/KeshavSoftRepos/2026-07-04/QuotationV3/Public/ks/components/v14/table/body/options/v3/events/updateClick/toggleButtons.js): Handles visibility toggling for the Edit, Delete, Update, and Cancel buttons.

