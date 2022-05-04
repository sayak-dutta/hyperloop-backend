import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SupportFaqController,
  SupportFaqsController,
} from './supportFaq.controller';
import { SupportFaq, SupportFaqSchema } from './supportFaq.schema';
import { SupportFaqService } from './supportFaq.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SupportFaq.name,
        schema: SupportFaqSchema,
      },
    ]),
  ],
  providers: [SupportFaqService],
  controllers: [SupportFaqController, SupportFaqsController],
  exports: [SupportFaqService],
})
export default class SupportFaqModule {}
