// Mutiple Arguments

let add = function(a, b, c) {
    return a + b
}

let result = add(10, 1, 5)
console.log(result)

//Defautl arguments

let getScoreText =  function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - , Score: ${score}`
    // return 'Name: ' + name + ' - Score: ' + score
}


let scoreText = getScoreText()
console.log(scoreText)

//Challenge area

//Tip Calculator function getTip()
//total, tipPercent .2

let getTip = function (total, tipPercent = .2) {
    let tip = (total * tipPercent)
    tip = tip.toFixed(2)
    let percent = tipPercent * 100
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let yourTip = getTip(60)

console.log(yourTip)

let name = 'Erin'

console.log(`Hello, my name is ${name}`)