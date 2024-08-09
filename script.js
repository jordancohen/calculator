var num1 = "";
var num2 = ""; 
var operator = "";
var lastPressOp = false;
const container = document.querySelector('.container');
const opBtn = document.querySelectorAll('.operations');
const digBtn = document.querySelectorAll('.digits');
const clearBtn = document.querySelector('#clear');
let displayVal = document.querySelector('.display');

digBtn.forEach((dig) =>
    dig.addEventListener('click', () => digButtonPress(dig.textContent)));


opBtn.forEach((op) =>
    op.addEventListener('click', () => opButtonPress(op.textContent)));

clearBtn.addEventListener('click', () => clearDisplay());

function digButtonPress(num) {
    if (operator === "") num1 += num;
    else num2 += num;
    if (lastPressOp) {
        displayVal.textContent = "";
        lastPressOp = false;
    }
    displayVal.textContent += num;
}

function opButtonPress(oper) {
    if (operator !== "") {
        displayInfo();
        if (oper !== "=") {
            operator = oper;
        }
    }
    else {
        displayVal.textContent = "";
        operator = oper;
    }
    lastPressOp = true;
}

function displayInfo() {
    displayVal.textContent = operate(num1, num2, operator);
    num1 = displayVal.textContent;
    num2 = "";
    operator = "";
}

function clearDisplay() {
    displayVal.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
}

function operate(a, b, op) {
    a = Number(a);
    b = Number(b);
    if (op === "+") return add(a,b);
    if (op === "-") return subtract(a,b);
    if (op === "x") return multiply(a,b);
    if (op === "÷") return divide(a,b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}