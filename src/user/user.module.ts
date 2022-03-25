import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";
import { UserService } from "./user.service";
import { UserController, UsersController } from "./user.controller";


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
    controllers: [UserController, UsersController],
    exports: [UserService],
})
export class UserModule {};