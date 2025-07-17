document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('fee-form');
    const tableBody = document.querySelector('#items-table tbody');
    const addRowBtn = document.getElementById('add-row');
    const totalFeeDiv = document.getElementById('total-fee');
    const currentDateSpan = document.getElementById('current-date');

    // Set the current date
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    currentDateSpan.textContent = today.toLocaleDateString('en-US', options);

    const calculateFee = (weight) => {
        if (weight <= 0.5) return 1.04;
        if (weight <= 1.0) return 1.53;
        if (weight <= 2.0) return 2.27;
        return 2.89 + (weight - 2) * 1.06;
    };

    const updateRow = (row) => {
        const weightInput = row.querySelector('.weight');
        const quantityInput = row.querySelector('.quantity');
        const feePerUnitInput = row.querySelector('.fee-per-unit');
        const subtotalFeeInput = row.querySelector('.subtotal-fee');

        const weight = parseFloat(weightInput.value) || 0;
        const quantity = parseInt(quantityInput.value) || 0;

        const feePerUnit = calculateFee(weight);
        const subtotalFee = feePerUnit * quantity;

        feePerUnitInput.value = `$${feePerUnit.toFixed(2)}`;
        subtotalFeeInput.value = `$${subtotalFee.toFixed(2)}`;

        updateTotalFee();
    };

    const updateTotalFee = () => {
        let totalFee = 0;
        const subtotalInputs = document.querySelectorAll('.subtotal-fee');
        subtotalInputs.forEach(input => {
            totalFee += parseFloat(input.value.replace('$', '')) || 0;
        });
        totalFeeDiv.textContent = `Total Fee: $${totalFee.toFixed(2)}`;
    };

    const addRow = () => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" class="sku"></td>
            <td><input type="number" class="weight" step="0.01" required></td>
            <td><input type="number" class="quantity" value="1" required></td>
            <td><input type="text" class="fee-per-unit" readonly></td>
            <td><input type="text" class="subtotal-fee" readonly></td>
        `;
        tableBody.appendChild(newRow);

        newRow.querySelectorAll('.weight, .quantity').forEach(input => {
            input.addEventListener('input', () => updateRow(newRow));
        });

        updateRow(newRow);
    };

    addRowBtn.addEventListener('click', addRow);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        updateTotalFee();
    });

    // Add initial row
    addRow();
});