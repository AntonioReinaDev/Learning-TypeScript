const person = {
    name: "Antonio",
    age: 22,
    occupation : "Back-end Developer"
};

const personJunior: {name: string, age: number, occupation: string} = {
    name: "Junior",
    age: 21,
    occupation: "Front-end Developer"
};

const personPaulo: {name: string, age: number, occupation: string} = {
    name: "Paulo",
    age: 20,
    occupation: "Full-stack Developer"
};

enum Occupation{
    "Back-end Developer",
    "Front-end Developer",
    "Full-stack Developer"
};

interface Person {
    name: string,
    age: number,
    occupation?: Occupation
};

interface Student extends Person{
    subjects: string[]
};

const richard: Person = {
    name: "Richard",
    age: 19,
    occupation: Occupation["Back-end Developer"]
};

const igor: Student = {
    name: "Igor",
    age: 18,
    occupation: Occupation["Full-stack Developer"],
    subjects: ["discrete math" , "programming logic" , "algorithms"]
};

function list(list: string[]){
    for (const item of list){
        console.log("- ", item)
    };
};

list(igor.subjects);