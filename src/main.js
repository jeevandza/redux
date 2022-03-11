console.log("Hello World!");

const person = { name: "bob", age: "35", address: {
    country:"usa",
    city:'moodbidire'
} };

// const updated = Object.assign({}, person, {name: "bob", age: '35'})
// console.log(updated)

// const upadted = {...person, name: "bob"}
// console.log(upadted)

const updated = {
    ...person, 
    address:{
        ...person.address,
        city: 'newyourk',
    },
    name:'jhon'
}


// console.log(person, 'person')


///immutable 

const numbers = [1,2,3]

//adding
const index = numbers.indexOf(2)

const added = [...numbers.slice(0, index),
    4, 
    ...numbers.slice(index)
] 
// console.log(added, 'added')

//remove a item
const removed = numbers.filter(n=> n!=2)
// console.log(removed)


// updating 
const update = numbers.map(n=> n===1 ? 200 : n)
// console.log(update)

// console.log(newUpdate)
