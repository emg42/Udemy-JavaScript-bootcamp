let myAccount = {
    name: 'Erin',
    expenses: 0,
    income: 0,
    balance: 0
}



let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
    return account.expenses
}

//addIncome
//resetAccount (resets expenses and income to zero)
//getAccountSummary (summary of each property in the account)

let addIncome = function(account, amount) {
    account.income = account.income + amount
    return `Erin got paid $${500}`
    // console.log(account)
}



let getBalance = function(account) {
account.balance = account.income - account.expenses
return account.balance
}

let getAccountSummary = function(account) {
    account.balance = getBalance(account)
    return `${account.name}'s account has a balance of ${account.balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

let gotPaid = addIncome(myAccount, 500)
console.log(gotPaid)

addExpense(myAccount, 2.50)
console.log(myAccount)
console.log(getBalance(myAccount))
addExpense(myAccount, 75.32)
console.log(myAccount)

addIncome(1400)
console.log(myAccount)
let accountSummary = getAccountSummary(myAccount)
console.log(accountSummary)



console.log(myAccount)

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
    return `Your account expenses are $${account.expenses} and your income is $${account.income}`
    
}

let emptyAccount = resetAccount(myAccount)
console.log(emptyAccount)