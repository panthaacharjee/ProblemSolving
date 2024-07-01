function BankAccount(accountName, balance=0){
    this.accountName = accountName
    this.balance = balance
    this.accountNumber = Date.now()

    this.deposit = function(amount){
        this.balance += amount
    }
}

const rakeshAccount = new BankAccount("Rakesh", 36000)
const jhonAccount = new BankAccount("Jhon", 5000)

rakeshAccount.deposit(5000)
jhonAccount.deposit(1000)

console.log(rakeshAccount)
console.log(jhonAccount)