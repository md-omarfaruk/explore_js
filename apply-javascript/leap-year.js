const year = 3500;
console.log(year / 4);

const secondYear = 3500;
console.log(secondYear % 4);

const thirdYear = 3500;
const reminder = thirdYear % 4;
console.log(reminder == 0);

const forthYear = 3600;
const forthReminder = forthYear % 4;
if(forthReminder == 0){
    console.log("This year is a Leap Year");
}
else{
    console.log("This year is not a Leap Year");
}


function isLeapYear(fifthYear){
    const lastYear = fifthYear % 4;
    if (lastYear == 0){
        return true;
    }
    else{
        return false;
    }
}
const checkYear = isLeapYear(3700);
    console.log(checkYear);