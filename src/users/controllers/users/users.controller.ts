import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
import e from 'express';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('USER_SERVICE') private readonly userService:UsersService
    ){}
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getUsers(){
        return this.userService.getUser();
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/username')
    getByUsername(@Param('username') username:string){
        const user=this.userService.getUserByUsername(username)
        if(user) return new SerializedUser(user);
        else throw new HttpException("user not found",HttpStatus.BAD_REQUEST);
    }
}
