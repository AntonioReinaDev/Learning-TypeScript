function printValues(firstNumber: number, secondNumber: number): void {
    console.log(firstNumber + secondNumber);
}

function addValues(firstNumber: number, secondNumber: number, callback: (number: number) => number): number {
    let result = firstNumber + secondNumber;
    return callback(result);
}

function squared(number: number): number {
    return number * number;
}

console.log(addValues(2, 2, squared));