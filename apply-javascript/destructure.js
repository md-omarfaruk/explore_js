const person = {name: "Md. Omar", age: 24, profession: "student", height: 5.8, weight: 65};
    console.log(person.weight);


const person2 = {name: "Md. Omar", age: 24, profession: "student", height: 5.8, weight: 65};
const profession = person2.profession;
    console.log(profession); 
    
    

const person3 = {name: "Md. Omar", age2: 24, profession: "student", height: 5.8, weight: 65};
const {name, age2, height} = person3
    console.log(age2);



const person4 = {name2: "Md. Omar", age: 24, profession: "student", height2: 5.8, weight: 65};
const {name2, salary, height2} = person4;
    console.log(name2, salary, height2);



const complexObject = {ball: "football", details:{price: 900, size: 5}};
const {size} = complexObject.details;
    console.log(size);

    // Array desturcture

const friends = ["Md.", "Omar", "Faruk"];
const [chotovai] = friends;
    console.log(chotovai);



const friends2 = ["Md.", "Omar", "Faruk"];
const [chotovai2, borovai] = friends2;
    console.log(chotovai,borovai);



const friends3 = ["Md.", "Omar", "Faruk"];
const [chotovai3,...ami] = friends3;
    console.log(chotovai3,...ami);


