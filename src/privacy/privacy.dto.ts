import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class PrivacyCreateDto {
  @IsNotEmpty()
  privacyTitle: string;

  @IsNotEmpty()
  privacyDate: string;

  @IsNotEmpty()
  privacyDescription: string;
}

export class PrivacyUpdateDTO extends PartialType(PrivacyCreateDto) {}
