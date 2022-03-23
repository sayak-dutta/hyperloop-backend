import { Controller, Post, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserLocalAuthGuard } from "./guards/user-local-auth.guard";

@Controller('user')
export class AuthController{
    constructor(
        private readonly userAuthService: AuthService
    ){}

    @Post('session')
    @UseGuards(UserLocalAuthGuard)
    async UserLogin(@Request() request:any){
        const token = await this.userAuthService.createUserSession(
            request.user,
            request.ip,
            request.headers['user-agent']
        );

        return {
            token: token,
            userId: request.user._id
        }
    }
}