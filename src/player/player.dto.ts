import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PlayerCreateDto {
  // @IsMongoId()
  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  board: string;

  @IsNumber()
  @IsNotEmpty()
  level: number;

  @IsNotEmpty()
  parent: string;

  @IsNumber()
  @IsNotEmpty()
  playerNo: number;

  @IsNumber()
  @IsNotEmpty()
  referCount: number;
}

export class PlayerUpdateDTO extends PartialType(PlayerCreateDto) {}
