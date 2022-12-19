"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = void 0;
class Branch {
    constructor(name) {
        this.name = name;
        this.customers = [];
    }
    getName() {
        return this.name;
    }
    getCustomers() {
        return this.customers;
    }
    addCustomer(customer) {
        let customerData = this.findCustomer(customer.getId());
        if (customerData) {
            console.log(` The customer with ${customer.getName()} name, and id: ${customer.getId()} is exist`);
            return false;
        }
        else {
            this.customers.push(customer);
            console.log(`The customer with ${customer.getName()} name, and id-${customer.getId()} was successfully added to '${this.name}' branch`);
            return true;
        }
    }
    addCustomerTransaction(id, transaction) {
        let customer = this.findCustomer(id);
        if (customer) {
            customer.addTransaction(transaction);
            return true;
        }
        else {
            console.log(`${this.generateError("An error occurred!", 500)}`);
        }
        return false;
    }
    findCustomer(id) {
        for (let customer of this.customers) {
            if (customer.getId() === id) {
                return customer;
            }
        }
        return null;
    }
    generateError(message, code) {
        {
            throw { message: message, errorCode: code };
        }
    }
}
exports.Branch = Branch;
