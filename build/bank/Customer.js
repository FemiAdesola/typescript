"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = (Math.floor((Math.random() * 100) + 1)).toString();
        this.transaction = [];
    }
    getName() { return this.name; }
    getId() { return this.id; }
    getTransaction() { return this.transaction; }
    getBalance() {
        let balance = 0;
        this.transaction.forEach(t => balance += t.amount);
        if (balance < 0) {
            balance = 0;
        }
        console.log(`Your balance is ${balance}`);
        return balance;
    }
    addTransaction(amount) {
        this.transaction.push({ amount, date: new Date() });
        if (amount > 0) {
            console.log(`Transaction of ${amount} was added to ${this.name}'s account with id ${this.id}`);
        }
        else if (amount < 0) {
            console.log(`Transaction of ${amount} was removed from ${this.name}'s account with id ${this.id}`);
        }
        {
            return true;
        }
    }
}
exports.Customer = Customer;
