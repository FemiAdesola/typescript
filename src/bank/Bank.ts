import { Branch } from "./Branch";
import { Customer } from "./Customer";
export class Bank {
   
    branches: Branch[];
    constructor(private name: string) {
        this.branches = new Array<Branch>();  
    }

    addBranch(branch: Branch): boolean { 
        if (this.checkBranch(branch)) {
            console.log(`This branch ${branch.getName()} is in the list of branches`)
            return false;
        } else {

            this.branches.push(branch);
            console.log(`This branch ${branch.getName()} has been added successfully`)
            return true;
        }
    }

    addCustomer(branch: Branch, customer:Customer): boolean { 
        if (!this.checkBranch(branch)) {
            console.log(`This branch ${branch.getName()} not found`)
            return false;
        }
        else{
            branch.addCustomer(customer);
            console.log(`This ${branch.getName()} was added successfully`)   
            return true;
        }
    }
    
    addCustomerTransaction(branch: Branch, id:string, transaction: number): boolean {
        if (this.checkBranch(branch)) {
            let customerId = branch.findCustomer(id);
            if (customerId) {
                customerId.addTransaction(transaction);
                return true;
            } else {
                console.log(`This customer id ${id} not found on branch ${branch.getName()}`)
            }
        } else {
            console.log(`This branch ${branch.getName()} not found`)
        }
        return false;
    }

    findBranchByName(branchName: string){
        const filterBranch = this.branches.filter(branch => {
            return branch.getName().toLowerCase().match(branchName)
        })
        if(filterBranch.length > 0) {
            let branchName = filterBranch.map(branch => {
                return branch.getName()
            })
            console.log(`This branch '${branchName}' : '${branchName.join(',')}' is existing `);
        } else {
            console.log(`This branch '${branchName}' is not in the list of branches`)
        }
    }

    checkBranch(branch:Branch):boolean {
        if(branch) {
            let bank = this.branches.find(existingBranch => {
                return existingBranch.getName() === branch.getName()
            })
            return Boolean(bank)
        }
        return false
    }

    listCustomers(branch:Branch, listOfCustomer:boolean =false):boolean {
        this.branches.find(existedBranch => {
            if(existedBranch.getName() === branch.getName()) {
                if(listOfCustomer) {
                    let customers = existedBranch.getCustomers();
                    customers.map(customer => {
                        if(customer.getTransaction().length > 0) {
                            console.log(`Customer ${customer.getName()}(id: ${customer.getId()}) transactions: `)
                            customer.getTransaction().map(transaction => {
                                console.log(transaction)
                            })
                        } else {
                            console.log(`Customer ${customer.getName()}(id: ${customer.getId()}): 'No transactions was made' `)
                        }
                    })
                }
                return true
            }
        })
        return false
    }
    
}
