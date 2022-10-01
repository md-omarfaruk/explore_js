const age = [1, 2, 3, 4, 5];
const age2 = [6, 7, 8, 9, 10];
const allAges = age.concat(age2);
    console.log(allAges);


const ages = [1, 2, 3, 4, 5];
const ages2 = [6, 7, 8, 9, 10];
const ages3 = [11, 13, 14, 15];
const allAges2 = ages.concat(ages2).concat([12]).concat(ages3);
    console.log(allAges2);


const year = [1, 2, 3, 4, 5];
const year2 = [6, 7, 8, 9, 10];
const year3 = [11, 13, 14, 15];
const allYear = [...year, ...year2, 12, ...year3];
    console.log(allYear);


const ball = 250;
const bat = 150;
const stamp = 350;
const maxPrice = Math.max(ball, bat, stamp);
    console.log(maxPrice);


const total = [450, 900, 500];
const all = Math.max(...total);
    console.log(all);


const amount = [1000, 2000, 3000];
const minAmount = Math.min(...amount);
    console.log(minAmount);