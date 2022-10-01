const afterMonth = {
    firstName: "Md. Omar ",
    lastName: "Faruk",
    salary: 25000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(bill, tips, tax){
        console.log(this);
        this.salary = this.salary - bill - tips - tax;
        return this.salary;
    }
}
afterMonth.chargeBill(2000);
afterMonth.chargeBill(3000);
console.log(afterMonth.salary);

const omarSalary = {
    firstName: "...",
    lastName: ";;;",
    salary: 10000
}

const farukSalary = {
    firstName: "...",
    lastName: ";;;",
    salary: 15000
}
const omarAfterCharge = afterMonth.chargeBill.bind(omarSalary);
omarAfterCharge(3000);
console.log(omarSalary.salary);

const farukAfterCharge = afterMonth.chargeBill.bind(farukSalary);
farukAfterCharge(2000);
console.log(farukSalary.salary);

afterMonth.chargeBill.call(omarSalary, 3000, 300, 30 );
    console.log(omarSalary.salary);

afterMonth.chargeBill.apply(farukSalary, [2000, 200, 20]);
    console.log(farukSalary.salary);