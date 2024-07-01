// Encapsulation means combined in capsul, a property thats dont call in class outer

class BankAccount {
    accountName;
    #balance=0; //Encapsulation using in js by declared # symbol
    accountNumber;
    constructor (accountName, balance = 0){
        this.accountName = accountName;
        this.#balance = balance;
        this.accountNumber = Date.now()
    }
    deposit (amount){
        this.#balance += amount
    }
    witdraw (amount){
        this.#balance -= amount
    }
    getBalance(){
        return this.#balance
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

console.log(rakeshAccount.getBalance())
console.log(rakeshAccount.balance)