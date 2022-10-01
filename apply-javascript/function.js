var inch = 156;
    console.log(inch);


var inch = 156;
var feet = inch/12;
    console.log(feet);


function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
var nanaFeet = inchToFeet(256);
    console.log(nanaFeet);
var naniFeet = inchToFeet(380);
    console.log(naniFeet);
var dadiFeet = inchToFeet(450);
    console.log(dadiFeet);
var dadaFeet = inchToFeet(550);
    console.log(dadaFeet);


function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
var result = [150, 250, 350, 450];
var firstFeet = inchToFeet(result[0]);
    console.log(firstFeet);
var secondFeet = inchToFeet(result[3]);
    console.log(secondFeet);