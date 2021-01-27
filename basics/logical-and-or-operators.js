let temp = 55

//Logical And operator
//Logical or operator is true if at least one side is true. False otherwise
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
}

if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Eh, do what you want!')
}

//Challenge Area
let isGuestOneVegan = false
let isGuestTwoVegan = false

//Are both vegan? only offer vegan dishes
//At least one guest vegan? Make sure to offer some vegan options
//No vegan guests. Offer anthing up on the menu

if (isGuestOneVegan && isGuestTwoVegan ) {
    console.log("Offer vegan dishes")
} else if (isGuestOneVegan  || isGuestTwoVegan ) {
    console.log("offer some vegan options")
} else {
    console.log("offer anything on the menu")
}