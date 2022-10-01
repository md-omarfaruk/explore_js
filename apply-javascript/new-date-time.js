const timeStart = new Date();

let sum = 0;
for(let i = 0; i<10000000; i++){
    sum++
}

const timeEnd = new Date();

    console.log('Time Elapsed', timeEnd - timeStart, sum);