# Design Specification: Cancel Button DOM Reversion

This document details the relative DOM-based value extraction and state reversion implemented inside the Cancel button click handler.

---

## Technical Flow

When the **Cancel** button is clicked:
1. It queries all cells (`<td>`) of the parent row `<tr>`.
2. For each cell (excluding the actions column):
   * It finds the child input element.
   * It extracts the current text value of the input:
     `const val = nativeInput.value || "";`
   * It clears the input component and restores the value as standard static text inside the cell.
3. It toggles button visibilities back to the default state:
   * Hides `Cancel` and `Update`.
   * Shows `Edit` and `Delete`.
