

document.getElementById('deposit-button').addEventListener('click', function(){
    //console.log('deposit button click');
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText) 

    const depositTotal = document.getElementById('deposit-total');
    const priviousDepositText = depositTotal.innerText;
    const priviousDepositAmount = parseFloat(priviousDepositText)
    

    const newDepositTotal = priviousDepositAmount + newdepositAmount
    depositTotal.innerText = newDepositTotal;


    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText)

    const newbalanceTotal = balanceTotalAmount + newdepositAmount;
    balanceTotal.innerText = newbalanceTotal;

    depositInput.value = '';

})

document.getElementById('withdraw-button').addEventListener('click', function() {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
    //console.log(withdrawInputAmount);


    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    //console.log(previousWithdrawTotalText);
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotalAmount + withdrawInputAmount

    withdrawTotal.innerText = newWithdrawTotal;


    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotalAmount = parseFloat(balanceTotalText)

    const newBalanceTotal = previousBalanceTotalAmount - withdrawInputAmount;
    balanceTotal.innerText = newBalanceTotal;


    withdrawInput.value = '';


})