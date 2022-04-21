import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { SerializedUser, User } from 'src/users/types';
import { Repository } from 'typeorm';
import { User1 as UserEntity } from 'src/typeorm/Users';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,){}
    private users:User[]=[
        {
            
            username:"jay",
            password:"jay123"
        },
    ];
    getUser(){
        return this.users.map((user)=>new SerializedUser(user));
    }
    getUserByUsername(username:string){
        return this.users.find((user)=>user.username===username)
    }
    createUser(createUser: CreateUserDto){
        const newUser = this.userRepository.create(createUser);
        return this.userRepository.save(newUser);
      }
    
      findUserByUsername(username: string){
        return this.userRepository.findOne({where:{username}})
      }
    }

