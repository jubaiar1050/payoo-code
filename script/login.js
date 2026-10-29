document.getElementById("login-btn").addEventListener("click", function(){
    const inputNumber = document.getElementById("input-number");
    const contactNumber = inputNumber.value;
    const inputPin = document.getElementById("input-password");
    const pin = inputPin.value;
    if (contactNumber == ('01862699757') && pin == ('1234')) {
        window.location.assign("/home.html");
    }
    else {
        alert("login faild");
        return;
    }
})