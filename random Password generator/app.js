const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "@!#$%^&*()-`_?";

const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = () => {
    let password = "";
    const selectedSets = [];

    if (upperInput.checked) {
        selectedSets.push(upperSet);
    }
    if (lowerInput.checked) {
        selectedSets.push(lowerSet);
    }
    if (numberInput.checked) {
        selectedSets.push(numberSet);
    }
    if (symbolInput.checked) {
        selectedSets.push(symbolSet);
    }

    if (selectedSets.length === 0) {
        passBox.innerText = "Please select at least one character set.";
        return;
    }

    for (let i = 0; i < totalChar.value; i++) {
        const randomSet = selectedSets[Math.floor(Math.random() * selectedSets.length)];
        password += getRandomData(randomSet);
    }

    passBox.innerText = password;
};

generatePassword();

document.getElementById("btn").addEventListener("click", function () {
    generatePassword();
});
