import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ServiceSettingsAdminCreateDto {

  @IsNotEmpty()
  serviceIcon: string;

 
  @IsNotEmpty()
  serviceHeading: string;

  @IsNotEmpty()
  serviceDescription: string;

}

export class ServiceSettingsAdminUpdateDTO extends PartialType(
  ServiceSettingsAdminCreateDto,
) {}
