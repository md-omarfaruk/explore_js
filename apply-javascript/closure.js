function stopwatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock = stopwatch();
    console.log(clock());
    console.log(clock());

const clock2 = stopwatch();
    console.log(clock2());
    console.log(clock2());
    console.log(clock());
    console.log(clock());

const clock3 = stopwatch();
    console.log(clock3());
    console.log(clock3());
