import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ServiceSettingsAdminCreateDto {

  @IsNotEmpty()
  icon: string;

 
  @IsNotEmpty()
  featuredImage: string;

  @IsNotEmpty()
  shortDescription: string;

  @IsNotEmpty()
  longDescription: string;
}

export class ServiceSettingsAdminUpdateDTO extends PartialType(
  ServiceSettingsAdminCreateDto,
) {}
