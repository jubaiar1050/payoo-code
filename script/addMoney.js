document.getElementById('add-money-btn').addEventListener("click", function(){
    // bank name
    const bankName = getValueFromInput('add-money-bank');
    if (bankName == 'Select bank'){
        alert('Please select a bank');
        return;
    }
    // account number
    const accountNumber = getValueFromInput('add-money-number');
    if (accountNumber.length != 11){
        alert('invalid account number');
        return;
    }
    // account amount
    const addAmount = getValueFromInput('add-money-amount');
    // current balance
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(addAmount);
    // pin number
    const pin = getValueFromInput('add-money-pin');
    if (pin == '1234') {
        alert(`Add money successful from
            ${bankName}
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
                    <img src="assets/opt-1.png" alt="">
                </div>
                <div>
                    <h2 class="text-xl font-bold">Add Money</h2>
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