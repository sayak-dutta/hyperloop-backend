import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutController, AboutUsController } from './about.controller';
import { About, AboutSchema } from './about.schema';
import { AboutService } from './about.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: About.name,
        schema: AboutSchema,
      },
    ]),
  ],
  providers: [AboutService],
  controllers: [AboutController, AboutUsController],
  exports: [AboutService],
})
export default class AboutModule {}
