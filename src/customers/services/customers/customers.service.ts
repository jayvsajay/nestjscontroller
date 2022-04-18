import { Injectable } from '@nestjs/common';
@Injectable()
export class CustomersService {
    users=[
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
        return this.users.find((user)=>
        user.id === id);
    }
}