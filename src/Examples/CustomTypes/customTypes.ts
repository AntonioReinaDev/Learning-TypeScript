type input = number | string;

function addValue(firstType: input, secondType: input){
    if (typeof firstType === 'string' || typeof secondType === 'string') {
        return firstType.toString() + secondType.toString();
    }
    else {
        return firstType + secondType;
    }
}

console.log(addValue(1, 5));
console.log(addValue("Hello", ", how are you?"));
console.log(addValue("1", 5));