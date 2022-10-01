const students = [
    { id: 21, name: "Md"},
    {id: 7, name: "Omar"},
    {id: 3, name: "Faruk"}
];

const output = students.map(s => s.name);
    console.log(output);

const output2 = students.map(s => s.id);
    console.log(output2);

const result = students.filter(s => s.id > 3);
    console.log(result);

const resultFind = students.find(s => s.id < 7);
    console.log(resultFind)