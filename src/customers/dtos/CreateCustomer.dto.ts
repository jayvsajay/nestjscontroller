import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, ValidateNested } from "class-validator";
import { createAddressdto } from "./CreateAdress.dto";

export class createCustomerdto{
    @IsEmail()
    email:string;
    @IsNotEmpty()
    id:number;
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(()=>createAddressdto)
    address:createAddressdto;

}