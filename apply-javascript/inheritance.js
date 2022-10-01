class Parent{
    constructor(){
        this.fatherName = "Md. Toyab Ali";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Child("Md.Omar");
    console.log(baby);



class Country{
    constructor(){
        this.country = "Bangladesh";
    }
}
class Game extends Country{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.country;
    }
}
const match = new Game("cricket");
    console.log(match);
    console.log(match.getFullName());