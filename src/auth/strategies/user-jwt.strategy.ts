import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { AuthService } from "../auth.service";


@Injectable()
export class UserJwtStrategy extends PassportStrategy(Strategy, 'user-jwt'){
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.
            fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: any){
        let session = await this.authService.getSession(payload.sessionId);
        if(!session){
            throw new UnauthorizedException();
        }
        return session;
    }
}