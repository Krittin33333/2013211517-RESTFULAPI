const user = { 
    name: 'Krttin', 
    nickname: 'Aom',
    hobby:'Sleep',
    address:'Bangboo',
    province :{
        province:'Samutprakarn',
        postcode: 10560
    }
}

const showData = () => {
    const{nickname,hobby,province:{postcode}} = user
    return `My nickname is ${nickname}, My hobby is ${hobby}and my postcode is ${postcode}`
}
console.log(showData())

