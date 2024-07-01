function BankAccount(accountName, balance=0){
    this.accountName = accountName
    this.balance = balance
    this.accountNumber = Date.now()

}


// Prototype reduce memory Size

/* If  we call a function inside constractor function that call every new Object [new BankAccount("Rakesh", 36000)]. So we declared one time use to prototype*/

/* If you dont understand follow constractorFunction File */

BankAccount.prototype.deposit = function (amount){
    this.balance += amount
}
BankAccount.prototype.whitdraw = function (amount){
    this.balance -= amount
}

const rakeshAccount = new BankAccount("Rakesh", 36000)

rakeshAccount.deposit(5000)
rakeshAccount.whitdraw(11000)

console.log(rakeshAccount)
console.log(jhonAccount)