
// ambil element class name number saat di klik mendeteksi aksi tombol
// ambil angka tombol yang akan di klik
const numbers = document.querySelectorAll(".number");

//ambil satupersatu nilai dari tombol tersebut dengan menggunakan forEach (untuk testing gunankan console.log sebelum addEventListener) 
numbers.forEach((number) => {
    // dan ini gunakan klik event agar bisa menerima output setelah di klik
    // setelah itu buat argment event dan saat di console masukan event.target.value (event targetnya ke value yang dibuat di html element sebe;lumnya)
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);

        // menambahkan setelah const input number
        updateScreen(currentNumber);
    })
}) 

// ambil element classname calculator-screen
const calculatorScreen = document.querySelector('.calculator-screen');

// update screen saat di klik
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

// section operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

// definisikan function inputOperator
const inputOperator = (operator) => {
    if( calculationOperator === '') {
        prevNumber = currentNumber;
        
    }
    calculatorOperator = operator;
    currentNumber = '0';
}

// melakukan event pada element = 
const equalSign = document.querySelector('.equal-sign');


equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})


// function calculate
const calculate = () => {
    let result = '';
    
    switch(calculatorOperator) {
        case "+":
            result = ((parseFloat(prevNumber * 10) + parseFloat(currentNumber * 10)) / 10);
        break;
        case "-":
            result = prevNumber - currentNumber;
        break;
        case "*":
            result = prevNumber * currentNumber;
        break;
        case '/':
            result = prevNumber / currentNumber;
        break;
        case '%':
            result = prevNumber % currentNumber;
        break;
        default:
        return;
    }

    currentNumber = result;
    calculatorOperator = '';
}


// section AC agar berfungsi 
const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

// definisikan function clearAll
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}


// section decimal
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

// definisikan function inputDecimal
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}



