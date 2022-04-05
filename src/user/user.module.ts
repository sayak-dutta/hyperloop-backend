import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";
import { UserService } from "./user.service";
import { UserController, UsersController, VerifyUser } from "./user.controller";


@Module({
    imports: [
        MongooseModule.forFeature(
            [{
                name: User.name, 
                schema: UserSchema
            }]
        ),
    ],
    providers: [UserService],
    controllers: [UserController, UsersController, VerifyUser],
    exports: [UserService],
})
export class UserModule {};