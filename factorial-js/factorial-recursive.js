function factorial(n){
    if(n == 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(5);
    console.log(result);


let fact = 5;
    for(let i = 5; i >= 1; i--){
        fact = fact*i;
        console.log(fact);
    }
    