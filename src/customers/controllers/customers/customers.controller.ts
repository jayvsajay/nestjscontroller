import { Controller, Get, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService:
        CustomersService){}
    @Get(':id')
    getcustomers(@Param('id',ParseIntPipe)id:number,
    @Req() req:Request,
    @Res() res:Response){
       const customer= this.customersService.findCustomerById(id);
       if(customer){
           res.send(customer)
       } else{
           res.send({msg:"customer not found"})
       }
    }
}
