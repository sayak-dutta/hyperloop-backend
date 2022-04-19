import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EditProfileController, EditProfilesController } from './editProfile.controller';
import { EditProfile, EditProfileSchema } from './editProfile.schema';
import { EditProfileService } from './editProfile.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: EditProfile.name,
        schema: EditProfileSchema,
      },
    ]),
  ],
  providers: [EditProfileService],
  controllers: [EditProfileController, EditProfilesController],
  exports: [EditProfileService],
})
export default class EditProfileModule {}
