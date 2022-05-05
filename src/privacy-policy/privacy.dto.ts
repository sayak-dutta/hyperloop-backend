import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PrivacyCreateDto {

  @IsNotEmpty()
  privacyDate: string;

  @IsNotEmpty()
  privacyTitle: string;


  @IsNotEmpty()
  privacyDescription: number;


}

export class PrivacyUpdateDTO extends PartialType(PrivacyCreateDto) {}
