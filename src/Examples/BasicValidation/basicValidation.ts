let inputOne = document.getElementById("inputOne") as HTMLInputElement;
let inputTwo = document.getElementById("inputTwo") as HTMLInputElement;
let buttonClick = document.getElementById("buttonClick");

function addNumber(firstNumber: number, secondNumber: number, boolPrint: boolean, phrase: string) {
    let result = firstNumber + secondNumber;
    if (boolPrint) {
        console.log(`${phrase} ${result}`);
    }
    return firstNumber + secondNumber;
}

let boolPrint = true;
let phrase = "The value is: "
// if (buttonClick) {
//     buttonClick.addEventListener('click', () => {
//         if (inputOne && inputTwo) {
//             console.log(addNumber(Number(inputOne.value), Number(inputTwo.value)));
//         }
//     })
// }

buttonClick?.addEventListener('click', () => {
    console.log(addNumber(Number(inputOne?.value), Number(inputTwo?.value), boolPrint, phrase));
})