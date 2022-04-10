import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SponsorController, SponsorsController } from './sponsor.controller';
import { Sponsor, SponsorSchema } from './sponsor.schema';
import { SponsorService } from './sponsor.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Sponsor.name,
        schema: SponsorSchema,
      },
    ]),
  ],
  providers: [SponsorService],
  controllers: [SponsorController, SponsorsController],
  exports: [SponsorService],
})
export default class SponsorModule {}
