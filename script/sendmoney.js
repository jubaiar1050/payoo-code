document.getElementById('sendmoney-btn').addEventListener("click", function(){
    // sendmoney number
    const sendMoneyNumber = getValueFromInput('sendmoney-number');
    if (sendMoneyNumber.length != 11) {
        alert('invalid cashout number!')
    }
    // cashout amount
    const sendMoneyAmount = getValueFromInput('sendmoney-amount');
    // balance
    const currentBalance = getBalance();
    // calculate balance
    const newBalance = currentBalance - Number(sendMoneyAmount);
    if (newBalance < 0) {
        alert('invalid amount!');
        return;
    }
    // pin number
    const pin = getValueFromInput('sendmoney-pin');
    if (pin === '1234') {
        alert(`send money successful
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
                    <img src="assets/opt-3.png" alt="">
                </div>
                <div>
                    <h2 class="text-xl font-bold">Send Money</h2>
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
        alert('invalid pin!');
        return;
    }
})