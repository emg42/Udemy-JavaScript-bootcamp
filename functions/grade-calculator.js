//students score, students total possible score
//15/20 -> You got a C (75%)
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let getScore = function(studentScore, possibleScore = 20) {
    let grade = (studentScore/possibleScore) * 100
    grade = grade.toFixed()
    let letterGrade = ' '

    if (grade >= 90) {
        letterGrade = 'A'
    } else if (grade < 90 && grade >= 80){ 
        letterGrade = 'B'
        
    } else if (grade < 80 && grade>= 70){
        letterGrade = 'C'
    }
     else if (grade < 70 && grade >= 60) {
       letterGrade = 'D'
     } else {
         letterGrade = 'F'
     }
     return `You got a ${letterGrade} (${grade})`
}

let myGrade = getScore(11)

console.log(myGrade)




