import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ServiceSettingsAdminCreateDto {
  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsString()
  @IsNotEmpty()
  featuredImage: string;

  @IsString()
  @IsNotEmpty()
  shortDescription: string;

  @IsString()
  @IsNotEmpty()
  longDescription: string;
}

export class ServiceSettingsAdminUpdateDTO extends PartialType(
  ServiceSettingsAdminCreateDto,
) {}
