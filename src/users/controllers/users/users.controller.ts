import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseFilters, UseInterceptors } from '@nestjs/common';
import e from 'express';
import { UserNotFound } from 'src/users/exceptions/userNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
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
    @UseFilters(HttpExceptionFilter)
  @Get('/:username')
  getUserByName(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);
    if (user) return new SerializedUser(user);
    else throw new UserNotFound('User not Found', HttpStatus.BAD_GATEWAY);
  }
}
