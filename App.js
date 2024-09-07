function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        document.getElementById('result').textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const tip = (billAmount * tipPercentage) / 100;
    const total = billAmount + tip;

    document.getElementById('result').textContent = `Propina: $${tip.toFixed(2)}. Total a pagar: $${total.toFixed(2)}.`;
}
