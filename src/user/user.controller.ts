import { Controller, Delete, Get, Patch, Post, Param, NotFoundException, Body, BadRequestException } from "@nestjs/common";
import { use } from "passport";
import { UserCreateDto } from "./user.dto";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){};

    @Get(':user_id')
    async findOne(@Param() { user_id }){
        const user = await this.userService.findOneById(user_id)
        if(!user){
            throw new NotFoundException();
        }
        return user;
    }

    @Post()
    async create(@Body() userDocument: UserCreateDto){
        try{
            const user = await this.userService.create(userDocument);
            return user.toJSON();

        }catch(e){
            if(e.code == 11000){
                throw new BadRequestException(
                    'User with the same unique identifying details already exists'
                );
            }
            throw e;
        }
    }

    @Patch(':user_id')
    async update(        
        @Param() { user_id },
        @Body() userDocument  : UserCreateDto
        ){
            const user = await this.userService.update(user_id, userDocument);
            if(!user){
                throw new NotFoundException();
            }
            return user;
    }


    @Delete(':user_id')
    async remove(@Param() { user_id }){
        const user = await this.userService.remove(user_id);
        if(!user){
            throw new NotFoundException();
        }
        return user;
    }
}

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService){}
    @Get()
    async findAll(){
        const users = await this.userService.list();
    }
}