let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

// console.group(myBook)

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

// console.log(otherBook)

let getSummary = function (book) {
    return {
        Summary: `${book.title} by ${book.author} `,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long. `
    }
    
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//challengeArea
//Create a function - take farenheit in - return object with all three

let farenheitConversion = function(farenheit) {
    let celsius = (farenheit - 32) * (5/9)
    let kelvin = (farenheit +459.67) * (5/9)
    celsius = celsius.toFixed(0)
    kelvin = kelvin.toFixed(0)
    return {
        celsius: `The temperature in celsius is ${celsius} degrees`,
        kelvin: `The temperature in kelvin is ${kelvin} degrees`,
        farenheit: `The temperature in farenheit is ${farenheit} degrees`
    }
}

let myTemp = farenheitConversion(80)

console.log(myTemp.celsius, myTemp.kelvin, myTemp.farenheit)