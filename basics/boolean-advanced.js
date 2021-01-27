let isAccountLocked = false;
let userRole = 'user'


if (isAccountLocked) {
    console.log('is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin!')
} else {
    console.log('Welcome')
}

let temp = 114

//it is freezing
//it is hot
//go for it

if (temp <= 45) {
    console.log("it is freezing")
} else if (temp >= 100) {
    console.log("it is hot")
} else {
    console.log("go for it")
}