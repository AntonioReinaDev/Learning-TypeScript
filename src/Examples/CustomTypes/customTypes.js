"use strict";
function addValue(firstType, secondType) {
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
