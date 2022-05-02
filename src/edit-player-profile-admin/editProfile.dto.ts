import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EditProfileCreateDto {
 
  @IsString()
  player: string;


  @IsNotEmpty()
  playerName: string;


  @IsNotEmpty()
  playerPhoneNo: number;


  @IsNotEmpty()
  playerMobileNo: number;

 
  @IsNotEmpty()
  playerEmail: string;
}

export class EditProfileUpdateDTO extends PartialType(EditProfileCreateDto) {}
