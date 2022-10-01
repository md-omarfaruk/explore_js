class Student{
    
}
const student1 = new Student();
const student2= new Student();
    console.log(student1, student2);



class Student5{
    constructor(){
        this.id = 1;
        this.name = "Omar";
    }
}
const student3 = new Student5();
const student4= new Student5();
    console.log(student3, student4);



class Ball{
    constructor(ballPrice, ballName){
        this.price = ballPrice;
        this.name = ballName;
    }
}
const ball1 = new Ball(250, "tanisball");
const ball2 = new Ball(450, "football")
    console.log(ball1, ball2);
    console.log(ball1.price, ball2.name);



class Player{
    constructor(pName, pAge){
        this.name = pName;
        this.age = pAge;
        this.country = "Bangladesh";
    }
}
const player1 = new Player("sakib", 35);
    console.log(player1);
