function secondName(){
    console.log("Faruk");
};

console.log("Md.");
setTimeout(secondName, 1000);
setTimeout(function (){
    console.log("Profession")}, 2000);
setTimeout(() => {
    console.log("Student")}, 3000);
console.log("Omar")

// setInterval(() => {console.log("Ok, Done")}, 4000);




