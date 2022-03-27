import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { Sponsor, SponsorSchema } from "./sponsor.schema";


@Module({
    imports:[
        MongooseModule.forFeature([
            {
            name: Sponsor.name,
            schema: SponsorSchema
            }
        ])
    ],
    controllers:[],
    providers:[],
    exports:[]
})
export class SponsorModule {};