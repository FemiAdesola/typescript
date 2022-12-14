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
        console.log(balance);
        return balance;
    }
    addTransaction(amount: number): boolean {
        this.transaction.push({amount, date: new Date()})
        if (amount > 0) { 
            console.log(`Transaction of ${amount} was added to ${this.name}'s account with id ${this.id}`);
        } else if (amount < 0) {
            console.log(`Transaction of ${amount} was removed from ${this.name}'s account with id ${this.id}`)
        }
        { return true; }
     }
}