import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Board } from "./board.schema";


export class BoardCreateDTO {
   
    // @IsNotEmpty()
    boardNo: string;

    // @IsNumber()
    // @IsNotEmpty()
    boardPlayerCount: number;

    // @IsString()
    // @IsNotEmpty()
    boardName: string;

    @IsString()
    @IsNotEmpty()
    boardType: string;
}

export class BoardUpdateDTO extends PartialType(BoardCreateDTO){};