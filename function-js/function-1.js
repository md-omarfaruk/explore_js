function dubleIt(number){
    var result = number*2;
    console.log(result); 
}
dubleIt(50);
dubleIt(100);
dubleIt(500);

function dubleIt2(number){
    var result = number*2;
    return result;
}
var first = dubleIt2(60);
var second = dubleIt2(80);
    console.log(first, second);

function dubleIt3(number){
    var result = number*2;
    return result;
}
var first2 = dubleIt3(70);
var second2 = dubleIt3(80);
var total = first2 + second2;
    console.log(total);

function add(number1, number2){
    var result = number1 + number2;
    return result;
}
var sum = add(800, 52);
    console.log(sum);