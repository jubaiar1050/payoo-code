document.getElementById('payBill-btn').addEventListener("click", function(){
    // pay bill name
    const payBillName = getValueFromInput('payBill-name');
    if (payBillName == 'Select bank'){
        alert('Please select a bank!');
        return;
    }
    // account number
    const accountNumber = getValueFromInput('payBill-number');
    if (accountNumber.length != 11){
        alert('invalid account number!');
        return;
    }
    // pay bill amount
    const payBillAmount = getValueFromInput('payBill-amount');
    // current balance
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(payBillAmount);
    // pin number
    const pin = getValueFromInput('payBill-pin');
    if (pin == '1234') {
        alert(`Pay bill ${payBillAmount}Taka successful 
            to ${payBillName}
            at ${Date()}`);
        setBlance(newBalance);

        // transection history container
        const history = document.getElementById('history');
        // create a new history container
        const newHistory = document.createElement('div');
        newHistory.innerHTML = 
        `
        <div class="flex justify-between items-center rounded-2xl bg-red-100 p-4 my-3">
            <div class="flex gap-3 items-center">
                <div class="bg-base-300 rounded-full p-3">
                    <img src="assets/opt-5.png" alt="">
                </div>
                <div>
                    <h2 class="text-xl font-bold">Pay Bill</h2>
                    <p class="text-neutral/50">Today 10:44 am</p>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
        `;
        // append element
        history.append(newHistory);
    }
    else {
        alert('invalid pin!')
    }
})