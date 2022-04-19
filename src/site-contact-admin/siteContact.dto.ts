import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SiteContactCreateDto {

  @IsNumber()
  @IsNotEmpty()
  phoneNo: number;

  @IsMongoId()
  @IsNotEmpty()
  emailId: string;

  @IsMongoId()
  @IsNotEmpty()
  officeAddress: string;


 
}

export class SiteContactUpdateDTO extends PartialType(SiteContactCreateDto) {}
