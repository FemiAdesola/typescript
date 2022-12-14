"use strict";
// import { List } from "./types/ecommerce";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./bank/Customer");
const Bank_1 = require("./bank/Bank");
const Branch_1 = require("./bank/Branch");
//TASK1
const arizonaBank = new Bank_1.Bank("Arizona");
const westBranch = new Branch_1.Branch("West Branch");
const sunBranch = new Branch_1.Branch("Sun Branch");
const customer1 = new Customer_1.Customer("John");
const customer2 = new Customer_1.Customer("Anna");
const customer3 = new Customer_1.Customer("John");
console.log(`START`);
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);
console.log(`--------`);
arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);
// //
console.log(`--------`);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);
customer1.addTransaction(-1000);
customer1.getBalance();
console.log(`--------`);
arizonaBank.listCustomers(westBranch, true);
arizonaBank.listCustomers(sunBranch, true);
console.log('END');
/* Fix all the possible bugs you might find in the codes below */
// const users = new List()
// const products = new List()
// users.fetchAll("https://api.escuelajs.co/api/v1/users")
// products.fetchAll("https://api.escuelajs.co/api/v1/products")
// console.log(users.sortList("desc")) //Expect to see users array in new order of id decreasing
// /** find user by email.
//  * Take a parameter of type string.
//  * Return a found user or null*/
// const findUserByEmail = (email) => {
//     users.find(user => user.email === email)
// }
// const foundUser = findUserByEmail("john@mail.com")
// console.log(foundUser) //expect to see user with email "john@mail.com" in the console
// /** Find all products with titles matched the search, case insentitive. 
//  * Take a parameter of type string.
//  * Return an array
//  */
// const findProductsByText = (search) => {
//     products.filter(products => products.title === search)
// }
// const foundProducts = findProductsByText("shirt")
// console.log(foundProducts) //expect to see an array of all found products
// const testPush1 = users.push(
//     {
//         id: 1,
//         email: "william@gmail.com",
//         password: "william",
//         name: "William",
//         role: "customer",
//         avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
//     },
//     {
//         id: 90,
//         email: "henry@gmail.com",
//         password: "henry",
//         name: "Henry",
//         role: "customer",
//         avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
//     }
// )
// const testPush2 = users.push(
//     {
//         id: 90,
//         email: "william@gmail.com",
//         password: "william",
//         name: "William",
//         role: "customer",
//         avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
//     },
//     {
//         id: 100,
//         email: "henry@gmail.com",
//         password: "henry",
//         name: "Henry",
//         role: "customer",
//         avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
//     }
// )
// console.log(testPush1) // expect to see 0
// console.log(testPush2) // expect to see 1
// console.log(users) // expect too see 2 more users added in the end of array
