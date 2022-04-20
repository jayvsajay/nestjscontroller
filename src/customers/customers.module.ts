import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ValidateCustomer } from 'src/middlewares/ValidateAccount.middleware';
import { ValidateCustomerMiddleware } from 'src/middlewares/validateCustomer.middleware';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
.apply(ValidateCustomerMiddleware,
    ValidateCustomer)
    // .exclude(
    //   {
    //     path:'api/customers/create',
    //     method:RequestMethod.POST,
    //   },
    //   {
    //     path:'api/',
    //     method:RequestMethod.GET,
    //   },
    // )
    .forRoutes(CustomersController);
    
}
}
