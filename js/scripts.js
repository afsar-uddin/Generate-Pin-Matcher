// Generate pin number 4 digit
function generatePin() {
    const genPin = Math.round(Math.random() * 10000);
    const genPInText = genPin + '';

    if (genPInText.length != 4) {
        console.log('The generated pin is not the four digits,', genPInText)
        return generatePin();
    } else {
        return genPin;
    }
}
// Pin generate event listener
document.getElementById('generate-btn').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    const tryWarn = document.getElementById('try-warning');
    const genAgain = document.getElementById('generate-again');

    const generatedPin = generatePin();
    displayPin.value = generatedPin;

    tryWarn.style.display = 'block';
    genAgain.style.display = 'none';

});
// Keys click to display
document.getElementById('key-pad').addEventListener('click', function (e) {
    let value = e.target.innerText;
    const typedNumber = document.getElementById('typed-numbers');
    let displayTyped = typedNumber.value;
    if (isNaN(value)) {
        if (value == 'C') {
            typedNumber.value = '';
        }
    } else {
        typedNumber.value = displayTyped + value;
    }
});
// Displayed number clear
document.getElementById('clear-btn').addEventListener('click', function () {
    const typedNumber = document.getElementById('typed-numbers').value;
    const clearValue = typedNumber.slice(0, typedNumber.length - 1);

    document.getElementById('typed-numbers').value = clearValue;
    console.log(clearValue)
});
// Submit event listener 
document.getElementById('submit-btn').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const notifyWarning = document.getElementById('notify-warning');
    const notifySuccess = document.getElementById('notify-success');

    const tryWarning = document.getElementById('try-warning');
    let tryCount = document.getElementById("try-count");
    let tryCountInt = parseInt(tryCount.innerText);

    if (displayPin == typedNumbers) {
        notifySuccess.style.display = 'block';
        notifyWarning.style.display = 'none';
    } else {
        notifyWarning.style.display = 'block';
        notifySuccess.style.display = 'none';
        if (tryCountInt == 1) {
            tryWarning.style.display = 'none';
            document.getElementById('generate-again').style.display = 'block';
        } else {
            tryCount.innerText = tryCountInt - 1;
        }
    }
})