// machine > input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}
// machine > getbalance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}
// machine > setbalance
function setBlance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}
// machine id > all id hidden > show id
function showOnly(id){
    // all features
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');
    const sendMoney = document.getElementById('sendmoney');
    const payBill = document.getElementById('payBill');
    const getBonus = document.getElementById('getBonus');
    const transections = document.getElementById('history');
    // hidden all feature
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    sendMoney.classList.add('hidden');
    payBill.classList.add('hidden');
    getBonus.classList.add('hidden');
    transections.classList.add('hidden');
    // show selected feature
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}
