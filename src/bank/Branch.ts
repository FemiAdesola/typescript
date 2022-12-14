import { Customer } from "./Customer";

export class Branch{
    private customers:Customer[];
    constructor(private name:string) {
        this.customers = []
    }

    getName():string {
        return this.name
    }
    getCustomers():Customer[] {
        return this.customers
    }

    addCustomer(customer:Customer):boolean {
        let customerData = this.findCustomer(customer.getId());
        if(customerData) {
            console.log(` The customer with ${customer.getName()} name, and id: ${customer.getId()} is exist`);
            return false
        } else {
            this.customers.push(customer);
            console.log(`The customer with ${customer.getName()} name, and id-${customer.getId()} was successfully added to '${this.name}' branch`);
            return true
        }
    }

    addCustomerTransaction(id:string, transaction:number):boolean {
       let customer = this.findCustomer(id);
       if(customer) {
           customer.addTransaction(transaction)
           return true
       } else {
           console.log(`${ this.generateError("An error occurred!", 500)}`)
       }
       return false
    }

    findCustomer(id: string): Customer | null {
        if (!id) {
            throw new Error('id not found');
        }
        for (let customer of this.customers) {
            if (customer.getId() === id) {
                return customer;
            }
         }
       return null
    }

   generateError(message: string, code: number): never
        {
            throw { message: message, errorCode: code };
        }
    
    
}
