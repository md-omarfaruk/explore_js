function add(num1, num2){
    return num1+num2;
}
const total = add(10,15);
console.log(total);

function add2 (num3, num4){
    if(num4 == undefined){
        num4 = 0;
    }
    return num3+num4;
}
const total2 = add2(10,);
console.log(total2);

function add3(num5, num6){
    num6 = num6 || 0;
    return num5+num6;;
}
const total3 = add3(50);
console.log(total3);

function add4(num7, num8 = 0){
    return num7+num8;
}
const total4 = add4(60);
console.log(total4);