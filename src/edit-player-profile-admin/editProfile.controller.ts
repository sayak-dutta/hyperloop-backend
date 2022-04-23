import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { EditProfileService } from './editPlayer.service';
import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EditProfileCreateDto, EditProfileUpdateDTO } from './editProfile.dto';

@Controller('editProfile')
export class EditProfileController {
  constructor(private readonly editProfileService: EditProfileService) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const editProfile = await this.editProfileService.findOneById(id);
    if (!editProfile) {
      throw new NotFoundException();
    }
    return editProfile;
  }

  @Post()
  async create(@Body() editProfileDocument: EditProfileCreateDto) {
    try {
      const editProfile = await (
        await this.editProfileService.create(editProfileDocument)
      ).save();
      return editProfile.toJSON();
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(
    @Param() { id },
    @Body() editProfileDocument: EditProfileUpdateDTO,
  ) {
    const editProfile = await this.editProfileService.update(
      id,
      editProfileDocument,
    );
    if (!editProfile) {
      throw new NotFoundException();
    }
    return editProfile;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const editProfile = await this.editProfileService.remove(id);
    if (!editProfile) {
      throw new NotFoundException();
    }
    return editProfile;
  }
}

@Controller('editProfiles')
export class EditProfilesController {
  constructor(private readonly editProfileService: EditProfileService) {}

  @Get()
  async findAll() {
    const editProfiles = await this.editProfileService.findAll();
    if (!editProfiles) {
      throw new NotFoundException();
    }
    return editProfiles;
  }
}
