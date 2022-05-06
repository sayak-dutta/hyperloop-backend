import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PrivacyController, PrivacyControllers } from './privacy.controller';
import { Privacy, PrivacySchema } from './privacy.schema';
import { PrivacyService } from './privacy.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Privacy.name,
        schema: PrivacySchema,
      },
    ]),
  ],
  providers: [PrivacyService],
  controllers: [PrivacyController, PrivacyControllers],
  exports: [PrivacyService],
})
export default class PrivacyModule {}
