const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-btn');
const expenseField = document.getElementById('expense-field');
const balanceField = document.getElementById('balance-field');
const savingField = document.getElementById('saving-field');
const remainingBalance = document.getElementById('remaining-balance');

//get value from input boxes
function getInputValue(boxID){
    let inputBox = document.getElementById(boxID)
    let inputAmount = parseFloat(inputBox.value);
    if (isNaN(inputAmount) || inputAmount < 0) {
        inputBox.value = "";
        return alert("Please type valid amount in number format");
    }
    inputBox.value = '';
    return inputAmount;
}

//update expense
calculateBtn.addEventListener('click', function(event){
    let availableExpense = parseFloat(expenseField.innerText);
    let inputAmount = getInputValue('food-box');
    if (inputAmount > 0){
        expenseField.innerText = inputAmount + availableExpense;
    }
})

calculateBtn.addEventListener("click", function (event) {
    let availableExpense1 = parseFloat(expenseField.innerText);
    let inputAmount = getInputValue('rent-box');
    if (inputAmount > 0) {
        expenseField.innerText = inputAmount + availableExpense1;
    }
});

calculateBtn.addEventListener("click", function (event) {
    let availableExpense2 = parseFloat(expenseField.innerText);
    let inputAmount = getInputValue("clothes-box");
    if (inputAmount > 0) {
        expenseField.innerText = inputAmount + availableExpense2;
    }
});

//----------I AM REALLY NOT ABLE TO DO ANYTHING FROM HERE, I DON'T KNOW WHAT TO DO----------//
