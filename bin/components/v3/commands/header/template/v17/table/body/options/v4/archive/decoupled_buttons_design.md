# Technical Documentation: Decoupled Options Buttons Architecture

This document explains the design for decoupling the click event handlers for the `Edit`, `Delete`, `Update`, and `Cancel` buttons. Each button now manages its own logic in its respective folder, sharing row state via the parent Options Cell DOM element.

---

## 1. Sharing Row State in Memory

Instead of using a centralized event hook closure, we store the original DOM text nodes (`ksOriginalNodes`) directly on the parent custom element instance (`<ks-table-body-options-cell>`).

* When **Edit** is clicked, it populates `actionsCell.ksOriginalNodes = [...]`.
* When **Cancel** or **Update** is clicked, they read `actionsCell.ksOriginalNodes` to restore or update the table row cells.

---

## 2. Decoupled Click Handlers

### A. Edit Button (`createEditButton/start.js`)
Handles the Edit click only:
1. Locates sibling buttons in the parent cell.
2. Toggles visibility: hides `Edit`/`Delete`, shows `Update`/`Cancel`.
3. Backs up original nodes on the parent options cell.
4. Clones and inserts footer inputs.

### B. Cancel Button (`createCancelButton/start.js`)
Handles the Cancel click only:
1. Reverts row cells back to the `ksOriginalNodes` stored on the parent options cell.
2. Toggles visibility: hides `Cancel`/`Update`, shows `Edit`/`Delete`.

### C. Update Button (`createUpdateButton/start.js`)
Handles the Update click only:
1. Gathers modified values from cell input elements.
2. Updates the text nodes in `ksOriginalNodes` with the new values.
3. Reverts cells to static display.
4. Toggles visibility: hides `Update`/`Cancel`, shows `Edit`/`Delete`.
