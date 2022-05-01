import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BannerController, BannersController } from './banner.controller';
import { Banner,BannerSchema } from './banner.schema';
import { BannerService } from './banner.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Banner.name,
        schema: BannerSchema,
      },
    ]),
  ],
  providers: [BannerService],
  controllers: [BannerController, BannersController],
  exports: [BannerService],
})
export default class BannerModule {}
