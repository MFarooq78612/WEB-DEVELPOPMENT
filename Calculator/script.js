function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function resetDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    try {
        const display = document.getElementById('display');
        display.innerText = eval(display.innerText);
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
    }
}
