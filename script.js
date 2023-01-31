"use strict";
const billInput = document.querySelector("#bill-input");
const btn5 = document.querySelector("#btn-5");
const btn10 = document.querySelector("#btn-10");
const btn15 = document.querySelector("#btn-15");
const btn25 = document.querySelector("#btn-25");
const btn50 = document.querySelector("#btn-50");
const custom = document.querySelector("#custom");
const btns = document.querySelectorAll(".second-conteiner-box");
const numberInput = document.querySelector("#number-input");
const tipAmount = document.querySelector(".tip-amount-person-text-value");
const totalAmount = document.querySelector(".tip-amount-price-text");
const resetButton = document.querySelector("#reset-box");
const billError = document.querySelector("#first-conteiner-hover-text");
const numError = document.querySelector("#third-conteiner-hover-text")
resetButton.addEventListener("click", () => {
    billInput.value = 0;
    numberInput.value = 0;
    tipAmount.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
    resetButton.style.backgroundColor = "#0D686D";
    billError.classList.add('hidden');
    numError.classList.add('hidden');
    billInput.style.opacity = '0.3';
    numberInput.style.opacity = '0.3';
});

billInput.addEventListener("input", () => {
    if(billInput.value == '0') {
        billError.classList.remove('hidden');
        billInput.style.outlineColor = "#E17052";
    }
    else {
        billError.classList.add('hidden');
        billInput.style.outlineColor = "#26C2AE";
    }
    resetButton.style.backgroundColor = "#26C2AE";
});

numberInput.addEventListener('input', () => {
    if(numberInput.value == '0') {
        numError.classList.remove('hidden');
        numberInput.style.outlineColor = "#E17052";
    }
    else {
        numError.classList.add('hidden');
        numberInput.style.outlineColor = "#26C2AE";
    }
    resetButton.style.backgroundColor = "#26C2AE";
});

const calculate = (percent) => {
    const bill = billInput.value;
    const numInput = Number(numberInput.value);
    const x = Math.ceil(Number(((bill*percent)/100) + Number(bill))/Number(numInput));
    const y = Math.ceil(((bill*percent)/100)/numInput);
    tipAmount.innerHTML = "$" + y + ".00";
    totalAmount.innerHTML = "$" + x + ".00";
    
};

function activeOFF(){
    btn5.classList.remove("active");
    btn10.classList.remove("active");
    btn15.classList.remove("active");
    btn25.classList.remove("active");
    btn50.classList.remove("active");
}

btn5.addEventListener('click', () => {
    calculate(5);
    activeOFF();
    btn5.classList.add("active");
});

btn10.addEventListener('click', () => {
    calculate(10);
    activeOFF();
    btn10.classList.add("active");
});

btn15.addEventListener('click', () => {
    calculate(15);
    activeOFF();
    btn15.classList.add("active");
});

btn25.addEventListener('click', () => {
    calculate(25);
    activeOFF();
    btn25.classList.add("active");
});

btn50.addEventListener('click', () => {
    calculate(50);
    activeOFF();
    btn50.classList.add("active");
});

custom.addEventListener('input', () => {
    calculate(Number(custom.value));
});

billInput.addEventListener('input', () => {
    billInput.style.opacity = '1';
});

numberInput.addEventListener('input', () => {
    numberInput.style.opacity = '1';
});





