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
}
exports.Customer = Customer;
