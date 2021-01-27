let name = '     Erin '

//length property
console.log(name.length)

//convert to upper case
console.log(name.toUpperCase())

//conver to lower case
console.log(name.toLowerCase())

//includes method
let password = "abc123passd098"
console.log(password.includes('password'))

//trim method
console.log(name.trim())

//Challenge Area
//isValidPassword
//lenth is more than 8  - and it doesn't contain the word 'password'

let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')

}

console.log(isValidPassword('ajdfldasjlfjaslkd'))
console.log(isValidPassword('abc'))
console.log(isValidPassword('passwordjasldjlsa'))