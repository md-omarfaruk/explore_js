var fibo = [0, 1];
for(var i = 2; i <= 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
    console.log(fibo);


function fibonacci(n){
    var fiboN = [0, 1];
    for(var i = 2; i <= n; i++){
        fiboN[i] = fiboN[i-1] + fiboN[i-2];
    }
    return fiboN;
}
var result = fibonacci(15);
    console.log(result);