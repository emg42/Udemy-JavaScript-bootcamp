let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
console.log(myBook.title)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} is by ${myBook.author}`)

let person = {
    name: 'Haley',
    age: 27,
    location: 'Stardew Valley'
}

let message = `Hello, my name is ${person.name}. I am ${person.age} and I live in ${person.location}`

console.log(message)

person.age = person.age + 1

console.log(person.age)