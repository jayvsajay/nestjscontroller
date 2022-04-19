import { Injectable } from '@nestjs/common';
import { createCustomerdto } from 'src/customers/dtos/CreateCustomer.dto';
@Injectable()
export class CustomersService {
    customers=[
        {
        id:1,
        email:'dannel@',

    },
    {
        id:2,
        email:'jayvsajay@',
    },
    {
        id:3,
        email:'ramsjdk@',
     
    },
];
    findCustomerById(id:number) {
        return this.customers.find((user)=>
        user.id === id);
    }
    createCustomer(customerDto:createCustomerdto){
        this.customers.push(customerDto)
    }
    getCustomers(){
        return this.customers;
    }
}