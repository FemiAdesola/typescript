import { Customer } from "./bank/Customer";
import { Bank } from "./bank/Bank";
import { Branch } from "./bank/Branch";


// Bank task 
const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John")

const customer2 = new Customer("Anna")

const customer3 = new Customer("John")


console.log(`----------addBranch---------`)
arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch)

console.log(`----------findBranchByName---------`)
arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

console.log(`----------addCustomer---------`)
arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

console.log(`----------addCustomerTransaction---------`)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000)
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000)

console.log(`----------addTransaction---------`)
customer1.addTransaction(-1000)

console.log(`----------getBalance---------`)
customer1.getBalance();

console.log(`----------listCustomers---------`)
arizonaBank.listCustomers(westBranch, true)
arizonaBank.listCustomers(sunBranch,true)