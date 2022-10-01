// const numbers = [11, 12, 13, 14, 15]
// const output =[];
// for(let i = 0; i<numbers.length; i++){
//     const elements = numbers[i];
//     const result = elements * elements;
//     output.push(result);
// }
// console.log(output);



// const numbers = [11, 12, 13, 14, 15]
// function square(elements){
//     return elements * elements;
// }
// numbers.map(function(elements, index, array){
//     console.log(elements, index, array);
// })


// const numbers = [11, 12, 13, 14, 15]
// const result = numbers.map(function(elements){
//     return elements * elements;
// });
// console.log(result);


// const square = elements => elements * elements;
// const square = x => x*x;



const numbers = [11, 12, 13, 14, 15]
const result = numbers.map(x => x*x);
     console.log(result);

const result1 = numbers.filter(x => x < 14);
    console.log(result1);

const result2 = numbers.find(x => x > 10);
    console.log(result2);

