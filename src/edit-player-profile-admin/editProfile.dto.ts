import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EditProfileCreateDto {
  @IsMongoId()
  @IsString()
  player: string;

  @IsString()
  @IsNotEmpty()
  playerName: string;

  @IsNumber()
  @IsNotEmpty()
  playerPhoneNo: number;

  @IsNumber()
  @IsNotEmpty()
  playerMobileNo: number;

  @IsString()
  @IsNotEmpty()
  playerEmail: string;
}

export class EditProfileUpdateDTO extends PartialType(EditProfileCreateDto) {}
