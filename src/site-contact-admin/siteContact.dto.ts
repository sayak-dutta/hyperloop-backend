import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SiteContactCreateDto {
  @IsNumber()
  @IsNotEmpty()
  phoneNo: number;

  @IsString()
  @IsNotEmpty()
  emailId: string;

  @IsString()
  @IsNotEmpty()
  officeAddress: string;
}

export class SiteContactUpdateDTO extends PartialType(SiteContactCreateDto) {}
