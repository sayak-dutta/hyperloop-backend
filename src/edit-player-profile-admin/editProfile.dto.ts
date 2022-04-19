import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EditProfileCreateDto {
  @IsMongoId()
  @IsNotEmpty()
  playerName: string;

  @IsNumber()
  @IsNotEmpty()
  playerPhoneNo: number;


  @IsNumber()
  @IsNotEmpty()
  playerMobileNo: number;

  @IsMongoId()
  @IsNotEmpty()
  playerEmail: string;

  
}

export class EditProfileUpdateDTO extends PartialType(EditProfileCreateDto) {}
