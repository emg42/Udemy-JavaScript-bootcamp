//Lexical Scope (Static Scope)
//Global Scope - all of the things defined outside of all code blocks
//Local Scope - Defined inside code block

//In a scope you can access variables defined in that scope, or in any parent ancestor scope

//Global Scope (varOne)
    //Local Scope (varTwo)
        //Local Scope (varFour)
    //Local Scope (varThree)

let varOne = 'varOne'

if(true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
    if (ture) {
        let varFour = 'varFour'
    }
}
console.log(varTwo)

if(true) {
    let varThree = 'varThree'
}