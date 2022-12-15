"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = new Array();
    }
    addBranch(branch) {
        if (this.checkBranch(branch)) {
            console.log(`This branch ${branch.getName()} is in the list of branches`);
        }
        this.branches.push(branch);
        console.log(`This branch ${branch.getName()} has been added successfully`);
        return true;
    }
    addCustomer(branch, customer) {
        if (!this.checkBranch(branch)) {
            console.log(`This branch ${branch.getName()} not found`);
            return false;
        }
        else {
            branch.addCustomer(customer);
            console.log(`This ${branch.getName()} was added successfully`);
            return true;
        }
    }
    addCustomerTransaction(branch, id, transaction) {
        if (this.checkBranch(branch)) {
            let customerId = branch.findCustomer(id);
            if (customerId) {
                customerId.addTransaction(transaction);
                return true;
            }
            else {
                console.log(`This customer id ${id} not found on branch ${branch.getName()}`);
            }
        }
        else {
            console.log(`This branch ${branch.getName()} not found`);
        }
        return false;
    }
    findBranchByName(branchesList) {
        const filterBranch = this.branches.filter(branch => {
            return branch.getName().toLowerCase().match(branchesList);
        });
        if (filterBranch.length > 0) {
            let branchName = filterBranch.map(branch => {
                return branch.getName();
            });
            console.log(`This branch '${branchesList}' : '${branchName.join(',')}' is existing `);
            return true;
        }
        else {
            console.log(`This branch '${branchesList}' is not in the list of branches`);
        }
        return false;
    }
    checkBranch(branch) {
        if (branch) {
            let bank = this.branches.find(existingBank => {
                return existingBank.getName() === branch.getName();
            });
            return Boolean(bank);
        }
        return false;
    }
    listCustomers(branch, listOfCustomer = false) {
        this.branches.find(existedBranch => {
            if (existedBranch.getName() === branch.getName()) {
                if (listOfCustomer) {
                    let customers = existedBranch.getCustomers();
                    customers.map(customer => {
                        if (customer.getTransaction().length > 0) {
                            console.log(`Customer ${customer.getName()}(id: ${customer.getId()}) transactions: `);
                            customer.getTransaction().map(transaction => {
                                console.log(transaction);
                            });
                        }
                        else {
                            console.log(`Customer ${customer.getName()}(id: ${customer.getId()}): 'No transactions was made' `);
                        }
                    });
                }
                return true;
            }
        });
        return false;
    }
}
exports.Bank = Bank;
