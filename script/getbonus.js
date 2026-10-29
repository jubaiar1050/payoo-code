document.getElementById('bonusCoupon-btn').addEventListener("click", function(){
    // coupon number
    const couponNUmber = getValueFromInput('bonusCoupon-number');
    let bonus = 0;
    if (couponNUmber == 'a1234'){
        bonus = 500;
        alert(`Congretulations! you get ${bonus} Taka for this coupon number.`);
    }
    else if (couponNUmber == 'b1234'){
        bonus = 400;
        alert(`Congretulations! you get ${bonus} Taka for this coupon number.`);
    }
    else if (couponNUmber == 'c1234'){
        bonus = 300;
        alert(`Congretulations! you get ${bonus} Taka for this coupon number.`);
    }
    else if (couponNUmber == 'd1234'){
        bonus = 200;
        alert(`Congretulations! you get ${bonus} Taka for this coupon number.`);
    }
    else {
        alert('coupon number do not match!');
    }
    // current balance
    const currentbalance = getBalance();
    // new balance
    const newBalance = currentbalance + bonus;
    setBlance(newBalance);

    // transection history container
    const history = document.getElementById('history');
    // create a new history container
    const newHistory = document.createElement('div');
    newHistory.innerHTML = 
    `
    <div class="flex justify-between items-center rounded-2xl bg-green-100 p-4 my-3">
        <div class="flex gap-3 items-center">
            <div class="bg-base-200 rounded-full p-3">
                <img src="assets/opt-4.png" alt="">
            </div>
            <div>
                <h2 class="text-xl font-bold">Get Bonus</h2>
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
})