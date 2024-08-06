var num1 = "";
var num2 = ""; 
var operator = "";
const container = document.querySelector('.container');
const opBtn = document.querySelectorAll('.operations');
const digBtn = document.querySelectorAll('.digits');
let displayVal = document.querySelector('.display');

digBtn.forEach((dig) => {
    dig.addEventListener('click', () => {
        if (operator === "") num1 += dig.textContent;
        else num2 += dig.textContent;
        displayVal.textContent += dig.textContent;
        console.log(`num1: ${num1}`);
        console.log(`num2: ${num2}`);
    });
});

opBtn.forEach((op) => {
    op.addEventListener('click', () => {
        //operator = op.textContent;
        //if (operator === "AC") displayVal.textContent = "";
        if (operator === "") {
            operator += op.textContent;
            displayVal.textContent += operator;
        } else {
            displayInfo();
        }
        console.log(`operator: ${operator}`);
    });
});

function operate(a, b, op) {
    a = Number(a);
    b = Number(b);
    if (op === "+") return add(a,b);
    if (op === "-") return subtract(a,b);
    if (op === "x") return multiply(a,b);
    if (op === "÷") return divide(a,b);
}

function displayInfo() {
    displayVal.textContent = "";
    displayVal.textContent = operate(num1, num2, operator);
    console.log(`function: ${num1} ${operator} ${num2}`);
    console.log(`result: ${operate(num1, num2, operator)}`);
    num1 = displayVal.textContent;
    num2 = "";
    operator = "";
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

//function populateDisplay() {
    //let calcArr = Array.from(calcVal)
    //displayVal.textContent += num1;
    //displayValue += getFirstDigit();
    //displayValue += getOperator();
    //displayValue += getSecondDigit();
    //calcArr += displayValue;
    //calcVal.textContent = displayValue;

    //calcVal.textContent = displayValue;
    //console.log(`displayValue: ${displayValue}`);
    //console.log(`calcVal: ${calcVal.textContent}`);
    //console.log(`operate: ${operate(getFirstDigit(), getSecondDigit(), getOperator())}`);
    //displayValue = `${num1} ${operator} ${num2}`;
    //calcVal.textContent = displayValue;

    //let operation = operate(num1, num2, operator);
    //let calcArr = Array.from(calcVal).push(operate(getFirstDigit(), getSecondDigit(), getOperator()));
    //console.log(`operation: ${operation}`);
    //console.log(`calcArr: ${calcArr}`);
    //console.log(`calcVal: ${calcVal}`);
//}

//populateDisplay();