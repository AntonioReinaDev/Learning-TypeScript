"use strict";
let unknownValue;
unknownValue = 3;
unknownValue = "Hi";
unknownValue = true;
unknownValue = "Hello";
let stringTest = "Example";
//stringTest = unknownValue;
if (typeof unknownValue === "string") {
    stringTest = unknownValue;
}
//Unlike any type, unknown needs a check for assignment.
