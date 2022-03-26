import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class OTPCreateDto {
    @IsNumber()
    @IsOptional()
    otp: number;

    @IsString()
    @IsNotEmpty()
    phone_no: string;

    @IsNumber()
    @IsOptional()
    count: number;
}

export class OTPUpdateDTO extends PartialType(OTPCreateDto) {};