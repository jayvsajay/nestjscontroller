import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User1 } from 'src/typeorm';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategy } from './utils/LocalStrategy';
// import { sessionSerializer } from './utils/SessionSerializer';


@Module({
  imports:[TypeOrmModule.forFeature([User1]), PassportModule.register({session: true})],
  controllers: [AuthController],
  providers: [{
    provide: 'AUTH_SERVICE',
    useClass: AuthService
  },
  {
    provide: 'USER_SERVICE',
    useClass: UsersService
  },
  LocalStrategy,
]
})
export class AuthModule {}