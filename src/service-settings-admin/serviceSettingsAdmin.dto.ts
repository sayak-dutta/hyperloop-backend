import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ServiceSettingsAdminCreateDto {
  @IsMongoId()
  @IsNotEmpty()
  icon: string;

  @IsMongoId()
  @IsNotEmpty()
  featuredImage: string;

  @IsMongoId()
  @IsNotEmpty()
  shortDescription: string;

  @IsMongoId()
  @IsNotEmpty()
  longDescription: string;
  
}

export class ServiceSettingsAdminUpdateDTO extends PartialType(ServiceSettingsAdminCreateDto) {}
