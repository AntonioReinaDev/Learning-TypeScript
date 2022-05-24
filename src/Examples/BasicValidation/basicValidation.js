"use strict";
let inputOne = document.getElementById("inputOne");
let inputTwo = document.getElementById("inputTwo");
let buttonClick = document.getElementById("buttonClick");
function addNumber(firstNumber, secondNumber, boolPrint, phrase) {
    let result = firstNumber + secondNumber;
    if (boolPrint) {
        console.log(`${phrase} ${result}`);
    }
    return firstNumber + secondNumber;
}
let boolPrint = true;
let phrase = "The value is: ";
// if (buttonClick) {
//     buttonClick.addEventListener('click', () => {
//         if (inputOne && inputTwo) {
//             console.log(addNumber(Number(inputOne.value), Number(inputTwo.value)));
//         }
//     })
// }
buttonClick === null || buttonClick === void 0 ? void 0 : buttonClick.addEventListener('click', () => {
    console.log(addNumber(Number(inputOne === null || inputOne === void 0 ? void 0 : inputOne.value), Number(inputTwo === null || inputTwo === void 0 ? void 0 : inputTwo.value), boolPrint, phrase));
});
