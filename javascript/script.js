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




