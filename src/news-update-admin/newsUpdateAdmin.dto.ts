import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class NewsCreateDto{
    @IsMongoId()
    @IsNotEmpty()
    image: string;

    @IsMongoId()
    @IsNotEmpty()
    description: string;
}

export class NewsUpdateDTO extends PartialType(NewsCreateDto) {}
