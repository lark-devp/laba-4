const calculateButton = document.getElementById('sumBTN');
const totalCostSpan = document.getElementById('totalCost')

function resultSum(){
    let totalCost = 0;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox =>{
        totalCost += parseFloat(checkbox.value);
    })

    totalCostSpan.textContent = totalCost;
}