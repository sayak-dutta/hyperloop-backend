import { PartialType } from "@nestjs/mapped-types";
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class PlayerCreateDto{
    @IsMongoId()
    @IsNotEmpty()
    user: string;

    @IsMongoId()
    @IsNotEmpty()
    board: string;

    @IsNumber()
    @IsNotEmpty()
    level: number;

    @IsMongoId()
    @IsNotEmpty()
    parent: string;

    @IsNumber()
    playerNo: number;
}

export class PlayerUpdateDTO extends PartialType(PlayerCreateDto){};