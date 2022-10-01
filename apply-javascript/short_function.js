function dubbleIt(num){
    return num * 2+2-1;
}
const result = dubbleIt(3);
    console.log(result);



const dubbleIt2 = function(num){
        return num * 3;
}
const result2 = dubbleIt2(3);
    console.log(result2);



const dubbleIt3 = function myFun(num){
        return num * 3;
}
const result3 = dubbleIt3(5);
    console.log(result3);



const redubble = num => num*2;
  const result4 = redubble(6);
    console.log(result4);



const redubble2 = num => num*2;
    console.log(redubble2(8));



const redubble3 = (x, y) => x/y;
const result5 = redubble3(9, 3);
    console.log(result5);


const peraMtrLess = () => 100;
const result6 = peraMtrLess();
    console.log(result6);


const doMath = (x, y) => {
    const add = x + y;
    const guun = x - y;
    const sum = add * guun;
    return sum;
}
const sumResult = doMath(10, 2);
    console.log(sumResult);
