  import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { BannerService } from './banner.service';
import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BannerCreateDto, BannerUpdateDTO } from './banner.dto';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const banner = await this.bannerService.findOneById(id);
    if (!banner) {
      throw new NotFoundException();
    }
    return banner;
  }

  @Post()
  async create(@Body() bannerDocument: BannerCreateDto) {
    try {
      const banner = await (
        await this.bannerService.create(bannerDocument)
      ).save();
      return banner.toJSON();
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(@Param() { id }, @Body() bannerDocument: BannerUpdateDTO) {
    const banner = await this.bannerService.update(id, bannerDocument);
    if (!banner) {
      throw new NotFoundException();
    }
    return banner;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const banner = await this.bannerService.remove(id);
    if (!banner) {
      throw new NotFoundException();
    }
    return banner;
  }
}

@Controller('banners')
export class BannersController {
  constructor(private readonly bannerService: BannerService) {}

  @Get()
  async findAll() {
    const banners = await this.bannerService.findAll();
    if (!banners) {
      throw new NotFoundException();
    }
    return banners;
  }
}
