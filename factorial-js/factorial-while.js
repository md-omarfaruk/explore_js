var i = 1;
var factorial = 1;
while (i <= 10) {
    factorial = factorial * i;
    // console.log(i, factorial);
    i++;
}
    console.log(factorial);


function factorial_2(num){
    var i = 1;
    var fact = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var result = factorial_2(5);
    console.log(result);