function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}


function genaratePin() {
    const rendoms = Math.round(Math.random() * 10000)
    return rendoms;
}

document.getElementById('genarate-pin').addEventListener('click', function () {

    const pin = getPin();
    // display Pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;


})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-number');

    const previousTypeNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainigDigits = digits.join('');
            typeNumberField.value = remainigDigits;
        }
    }
    else {

        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})
document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('type-number');
    const typeNumber = typeNumberField.value;

    const pinSuccesMassege = document.getElementById('pin-succes');
    const pinUnsuccesMassege = document.getElementById('pin-unsucces');

    if (typeNumber === currentPin) {
        pinSuccesMassege.style.display = 'block'
        pinUnsuccesMassege.style.display = 'none'
    }
    else {
        pinUnsuccesMassege.style.display = 'block'
        pinSuccesMassege.style.display = 'none'
    }
})