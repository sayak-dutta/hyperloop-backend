import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SiteContactCreateDto {

  @IsNotEmpty()
  phoneNo: number;

 
  @IsNotEmpty()
  emailId: string;


  @IsNotEmpty()
  officeAddress: string;
}

export class SiteContactUpdateDTO extends PartialType(SiteContactCreateDto) {}
