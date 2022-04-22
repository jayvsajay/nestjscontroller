import { Controller,  Post,  Req,  Request,  UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
 @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req) {

    }

    // @Get('')
    // async getAuthSession(@Session() session: Record<string, any>){
    //     session.authenticate = true;
    //     return session;
    // }

    // @UseGuards(AuthenticateGuard)
    // @Get('status')
    // async getSessionStatus(@Req() req: Request){
    //     return req.user;
    // }

}