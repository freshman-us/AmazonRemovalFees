# Technical Design Document

## 1. Frontend

- **HTML:** The `index.html` file contains the structure of the web page, including the main table for item input and the total fee display area.
- **CSS:** The `style.css` file provides the styling for the application, including the table layout and read-only input fields.
- **JavaScript:** The `script.js` file contains the core logic of the application. It handles:
    - Dynamically adding and removing rows from the items table.
    - Calculating the fee per unit and subtotal for each item based on user input.
    - Calculating and displaying the total fee.
    - Displaying the current date.

## 2. Fee Calculation Logic

The `calculateFee` function in `script.js` is the core of the fee calculation. It takes an item's weight as input and returns the corresponding removal fee based on a hardcoded fee schedule. The results are then used to update the read-only input fields in the table.