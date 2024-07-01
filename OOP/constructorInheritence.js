function BankAccount(accountName, balance=0){
    this.accountName = accountName
    this.balance = balance
    this.accountNumber = Date.now()

}

BankAccount.prototype.deposit = function(amount){
    return this.balance += amount
}
BankAccount.prototype.withdraw = function(amount){
    return this.balance -= amount
}

function currentAccount (accountName, balance=0){
    BankAccount.call(this, accountName, balance)
    this.transectionLimit = 50000
}

currentAccount.prototype = Object.create(BankAccount.prototype)

const rakeshAccount = new currentAccount("Rakesh", 5000);
rakeshAccount.deposit(5000)
rakeshAccount.withdraw(2000)
console.log(rakeshAccount)