import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Board } from "./board.schema";


export class BoardCreateDTO {
    @IsNumber()
    @IsNotEmpty()
    boardNumber: number;

    @IsNumber()
    @IsNotEmpty()
    boardPlayerCount: number;

    @IsString()
    @IsNotEmpty()
    boardName: string;

}

export class BoardUpdateDTO extends PartialType(BoardCreateDTO){};