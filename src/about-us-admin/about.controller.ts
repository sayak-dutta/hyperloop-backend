import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { AboutService } from './about.service';
import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AboutCreateDto, AboutUpdateDTO } from './about.dto';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const about = await this.aboutService.findOneById(id);
    if (!about) {
      throw new NotFoundException();
    }
    return about;
  }

  @Post()
  async create(@Body() aboutDocument: AboutCreateDto) {
    try {
      const about = await (
        await this.aboutService.create(aboutDocument)
      ).save();
      return about.toJSON();
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(@Param() { id }, @Body() aboutDocument: AboutUpdateDTO) {
    const about = await this.aboutService.update(id, aboutDocument);
    if (!about) {
      throw new NotFoundException();
    }
    return about;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const about = await this.aboutService.remove(id);
    if (!about) {
      throw new NotFoundException();
    }
    return about;
  }
}

@Controller('aboutUs')
export class AboutUsController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  async findAll() {
    const aboutUs = await this.aboutService.findAll();
    if (!aboutUs) {
      throw new NotFoundException();
    }
    return aboutUs;
  }
}
