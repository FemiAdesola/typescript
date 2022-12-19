import { Transaction } from "./Transaction";

export class Customer{
    private id: string;
    private transaction: Transaction[];
    
    constructor(private name: string) {
        this.name = name;
        this.id = (Math.floor((Math.random() * 100) + 1)).toString();
        this.transaction = [];
    }

    getName(): string { return this.name; }
    getId(): string { return this.id; }
    getTransaction(): Transaction[] { return this.transaction; }

    getBalance(): number { 
        let balance = 0;
        this.transaction.forEach(t => balance += t.amount);
        if (balance < 0) { balance = 0; }
        console.log(`Your balance is ${balance}`);
        return balance;
    }
    addTransaction(balance: number): boolean {
        this.transaction.push({amount: balance, date: new Date()})
        if (balance > 0) { 
            console.log(`Transaction of ${balance} was added to ${this.name}'s account with id ${this.id}`);
        } else if (balance < 0) {
            console.log(`Transaction of ${balance} was removed from ${this.name}'s account with id ${this.id}`)
        }
        { return true; }
     }
}