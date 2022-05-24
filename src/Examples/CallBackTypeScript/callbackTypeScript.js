"use strict";
function printValues(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
function addValues(firstNumber, secondNumber, callback) {
    let result = firstNumber + secondNumber;
    return callback(result);
}
function squared(number) {
    return number * number;
}
console.log(addValues(2, 2, squared));
