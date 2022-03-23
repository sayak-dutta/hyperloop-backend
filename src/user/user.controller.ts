import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { UserCreateDto } from "./user.dto";


@Controller('user')
class UserController {
    @Get()
    async findOne(){

    }

    @Post()
    async create(){

    }

    @Patch()
    async update(){

    }

    @Delete()
    async remove(){

    }
}

@Controller('users')
class UsersController {
    @Get()
    async findAll(){
        
    }
}