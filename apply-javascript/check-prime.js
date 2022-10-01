var n = 18;
for(i = 2; i < n; i++){
    if(n%i==0){
        console.log('not a prime number');
        break;
    }
}

function isPrime(n){
    for (i = 2; i < n; i++){
        if (n % i == 0) {
            return 'not a prime number';
        }
    }
    return 'your number is a prime number'
}
var result = isPrime(19);
    console.log(result);