function largestNumbers(numbers){
    let larger = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
let result = largestNumbers([10, 20, 40, 100, 90, 50, 30]);
    console.log(result);