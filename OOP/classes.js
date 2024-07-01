class BankAccount{
    constructor (accountName, balance = 0){
        this.accountName = accountName;
        this.balance = balance;
    }
    deposit(amount){
        this.balance +=amount;
    }
    withdraw (amount){
        this.balance -= amount
    }
}

BankAccount.prototype.adjust = function(){
    return this.balance  + this.accountName
}

const rakeshAccount = new BankAccount("Rakesh", 5000)
rakeshAccount.deposit(5000)

console.log(rakeshAccount.adjust())
console.log(rakeshAccount)


/* Types of Classes Declartion */
const BrackBank = class {
    constructor (accountName, number, balance){
        this.accountName = accountName;
        this.number = number 
        this.balance = balance
    }
}