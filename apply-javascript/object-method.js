const name = {
    first_name: "Md.",
    last_name: "Omar",
    getFullName: function(){
        console.log(this.first_name, this.last_name);
    }
}

console.log(name.first_name);

const kamla = {
    fullName: "Md. Omar",
    salary: 15000,
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary; 
    }
}

kamla.chargeBill(100);
console.log(kamla.salary);

const kamla2 = {
    fullName: "Md. Faruk",
    salary: 20000
}

const kamlaFrnd = kamla.chargeBill.bind(kamla2);
kamlaFrnd(2000);
    console.log(kamla2.salary);