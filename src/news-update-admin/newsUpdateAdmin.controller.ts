import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { NewsService } from './newsUpdateAdmin.service';
import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NewsCreateDto, NewsUpdateDTO } from './newsUpdateAdmin.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const news = await this.newsService.findOneById(id);
    if (!news) {
      throw new NotFoundException();
    }
    return news;
  }

  @Post()
  async create(@Body() newsDocument: NewsCreateDto) {
    try {
      const news = await (await this.newsService.create(newsDocument)).save();
      return news.toJSON();
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(@Param() { id }, @Body() newsDocument: NewsUpdateDTO) {
    const news = await this.newsService.update(id, newsDocument);
    if (!news) {
      throw new NotFoundException();
    }
    return news;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const news = await this.newsService.remove(id);
    if (!news) {
      throw new NotFoundException();
    }
    return news;
  }
}

@Controller('news-all')
export class NewsControllers {
  constructor(private readonly NewsService: NewsService) {}

  @Get()
  async findAll() {
    const news = await this.NewsService.findAll();
    if (!news) {
      throw new NotFoundException();
    }
    return news;
  }
}
