import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsController, NewsControllers } from './newsUpdateAdmin.controller';
import { News, NewsSchema } from './newsUpdateAdmin.schema';
import { NewsService } from './newsUpdateAdmin.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: News.name,
        schema: NewsSchema,
      },
    ]),
  ],
  providers: [NewsService],
  controllers: [NewsController, NewsController],
  exports: [NewsService],
})
export default class NewsModule {}
