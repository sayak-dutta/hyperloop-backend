import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SiteContactController,
  SiteContactsController,
} from './siteContact.controller';
import { SiteContact, SiteContactSchema } from './siteContact.schema';
import { SiteContactService } from './siteContact.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SiteContact.name,
        schema: SiteContactSchema,
      },
    ]),
  ],
  providers: [SiteContactService],
  controllers: [SiteContactController, SiteContactsController],
  exports: [SiteContact],
})
export default class SiteContactModule {}
