const nums = [21, 33, 53, 83, 101];
const total = nums.reduce((sum, num) => sum + num, 0);
            console.log(total);

const friends = [{name: "Md.", taka: 101},
                 {name: "Omar", taka: 201},
                 {name: "Faruk", taka: 301},
                 {name: "Just me", taka: 501}
                                    
];
const totalTaka = friends.reduce((total, friend) =>{
    // console.log(total, friend.taka);
    return total + friend.taka;
}, 0)
        console.log(totalTaka);