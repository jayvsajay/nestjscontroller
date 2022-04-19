import { IsNotEmpty } from "class-validator";

export class createAddressdto{
    @IsNotEmpty()
    line1:string;
}