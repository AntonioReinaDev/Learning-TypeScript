"use strict";
const person = {
    name: "Antonio",
    age: 22,
    occupation: "Back-end Developer"
};
const personJunior = {
    name: "Junior",
    age: 21,
    occupation: "Front-end Developer"
};
const personPaulo = {
    name: "Paulo",
    age: 20,
    occupation: "Full-stack Developer"
};
var Occupation;
(function (Occupation) {
    Occupation[Occupation["Back-end Developer"] = 0] = "Back-end Developer";
    Occupation[Occupation["Front-end Developer"] = 1] = "Front-end Developer";
    Occupation[Occupation["Full-stack Developer"] = 2] = "Full-stack Developer";
})(Occupation || (Occupation = {}));
;
;
;
const richard = {
    name: "Richard",
    age: 19,
    occupation: Occupation["Back-end Developer"]
};
const igor = {
    name: "Igor",
    age: 18,
    occupation: Occupation["Full-stack Developer"],
    subjects: ["discrete math", "programming logic", "algorithms"]
};
function list(list) {
    for (const item of list) {
        console.log("- ", item);
    }
    ;
}
;
list(igor.subjects);
