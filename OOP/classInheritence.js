class BankAccount {
    constructor (accountName, balance = 0){
        this.accountName = accountName;
        this.balance = balance;
        this.accountNumber = Date.now()
    }
    deposit (amount){
        this.balance += amount
    }
    witdraw (amount){
        this.balance -= amount
    }
}

class currentAccount extends BankAccount {
    transectionLimit = 50000
    constructor (accountNameName, balance){
        super(accountNameName, balance)
    }
    transectionLoan (amount){
        console.log("Taking Loan", amount)
    }
}

const rakeshAccount = new currentAccount("Rakesh", 50000)
rakeshAccount.deposit(10000)
console.log(rakeshAccount)