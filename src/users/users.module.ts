import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User1 } from 'src/typeorm';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User1])
  ],
  controllers: [UsersController],
  providers: [{
    provide:'USER_SERVICE',
    useClass:UsersService,
  },
],
})
export class UsersModule {}
