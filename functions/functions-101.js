//Function - input, code, output (return value)

// let greetUser = function() {
//     console.log('Welcome User!')
// }

// greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value, otherValue)

//Challenge Area

//convert Farenheit to Celsius

//call a couple of times (32 -> 0) (68 -> 20)

//Print the converted values

let farenheitToCelsius = function(fTemp) {
    let celsius = (fTemp -32) * 5/9
    return celsius
    
}
let myTemp = farenheitToCelsius(68)
console.log(myTemp)