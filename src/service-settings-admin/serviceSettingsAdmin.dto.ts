import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ServiceSettingsCreateDto {
  @IsMongoId()
  @IsNotEmpty()
  icon: string;

  @IsMongoId()
  @IsNotEmpty()
  featured_image: string;

  @IsNumber()
  @IsNotEmpty()
  short_description: string;

  @IsMongoId()
  @IsNotEmpty()
  parent: string;

  @IsNumber()
  @IsNotEmpty()
  long_description: string;

  
}

export class ServiceSettingsUpdateDTO extends PartialType(ServiceSettingsCreateDto) {}
