class Product {
    constructor (name, id, price, quantity){
        this.name = name;
        this.id = id;
        this.price = price;
        this. quantity = quantity;
    }
}

const ball = new Product("Football", 101, 500, 50);
const bat = new Product("Cricket Bat", 102, 350, 100);
console.log(ball);
console.log(bat);

function Man (type, name, age){
    this.type = type;
    this.name = name;
    this.age = age;
}
const first = new Man("Men", "Md. Omar", 25);
const second = new Man("Women","Shajeda Begum", 59);
console.log(first);
console.log(second);