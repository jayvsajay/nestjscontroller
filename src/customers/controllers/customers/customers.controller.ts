import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { createCustomerdto } from 'src/customers/dtos/CreateCustomer.dto';
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
    @Get('')
    getAllCustomers(){
        return this.customersService.getCustomers();
    }
@Post('create')
@UsePipes(ValidationPipe)
createCustomer(@Body() createCustomerdto:createCustomerdto){
console.log(createCustomerdto)
this.customersService.createCustomer(createCustomerdto);
}   
}
