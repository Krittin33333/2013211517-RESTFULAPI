// const datefns = require('date-fns')
// const multipky = 10;


// console.log(datefns.format(new Date(),"MM/dd/yyyy"))
// console.log(multipky);
// //console.log("Hello world");

// let firstName = "Krittin"
// let age = 21

// // console.log(firstName + age)

// let info = `
//     My name is ${firstName}
//     My age is ${age}
// `

// console.log(info)

//object
const user = { 
    name: 'krttin', 
    salary : 15000,
    address :{
        province:'samutprakarn',
        postcode: 10560
    }
}

// console.log(user.salary)
// console.log(user.address.postcode)

const showData = () => `${user.name}`

const showData2 = () => {
    let info = 'My name is '
    return `${info}${user.name}`
}

// console.log(showData2())

const sumNumber = (a,b) => a+b

// console.log(sumNumber(9,1))


// Destructuring Assignment
// const product = { name: 'Coffee', price: 150 };
// const { price, name } = product;
// console.log(price);

const{name,salary,address:{postcode}} = user

