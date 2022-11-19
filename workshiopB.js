// const users = [
//     {name: 'A', hobby: 'Sleep', postcode:10560},
//     {name: 'B', hobby: 'Eat', postcode:10560},
//     {name: 'C', hobby: 'Walk', postcode:10560}
// ]

const user = [
    {name: 'Krttin', 
    nickname: 'Aom',
    hobby:'Sleep',
    address:'Bangboo',
    province :{
        province:'Samutprakarn',
        postcode: 10560
    }
    },
    {name: 'Krttin', 
    nickname: 'Aomsin',
    hobby:'Eat',
    address:'Bangboo',
    province :{
        province:'Samutprakarn',
        postcode: 10560
    }
    },
    {name: 'Krttin', 
    nickname: 'Aommy',
    hobby:'Walk',
    address:'Bangboo',
    province :{
        province:'Samutprakarn',
        postcode: 10560
    }
    }

]

for (const u of user){
    console.log(`My nickname is ${u.nickname}, My hobby is ${u.hobby} and my postcode is ${u.province.postcode}`)
}
