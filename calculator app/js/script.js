document.getElementById('calculate').addEventListener('click', function() {
    const sellingPrice = parseFloat(document.getElementById('sellingPrice').value);
    const productCost = parseFloat(document.getElementById('productCost').value);
    const marginPercentage = parseFloat(document.getElementById('margin').value);
    const divisions = parseFloat(document.getElementById('divisions').value);



    

    const marginAmount = (sellingPrice - productCost) * (marginPercentage / 100);
    const dividedMargin = marginAmount / divisions;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Total Margin Amount: $${marginAmount.toFixed(2)}<br>Margin per Division: $${dividedMargin.toFixed(2)}`;
});
