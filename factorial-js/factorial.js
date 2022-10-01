var factorial = 1;
for (var i= 1; i <= 5; i++) {
    factorial = factorial * i ;
    console.log(factorial);
}

function secondFactorial(num){
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var result = secondFactorial(6);
    console.log(result);