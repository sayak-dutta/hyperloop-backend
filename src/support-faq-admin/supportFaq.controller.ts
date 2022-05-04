import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { SupportFaqService } from './supportFaq.service';
import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SupportFaqCreateDto, SupportFaqUpdateDTO } from './supportFaq.dto';

@Controller('support-faq')
export class SupportFaqController {
  constructor(private readonly supportFaqService: SupportFaqService) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const supportFaq = await this.supportFaqService.findOneById(id);
    if (!supportFaq) {
      throw new NotFoundException();
    }
    return supportFaq;
  }

  @Post()
  async create(@Body() supportFaqDocument: SupportFaqCreateDto) {
    try {
      const supportFaq = await (
        await this.supportFaqService.create(supportFaqDocument)
      ).save();
      return supportFaq.toJSON();
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
    @Body() supportFaqDocument: SupportFaqUpdateDTO,
  ) {
    const supportFaq = await this.supportFaqService.update(
      id,
      supportFaqDocument,
    );
    if (!supportFaq) {
      throw new NotFoundException();
    }
    return supportFaq;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const supportFaq = await this.supportFaqService.remove(id);
    if (!supportFaq) {
      throw new NotFoundException();
    }
    return supportFaq;
  }
}

@Controller('support-faqs')
export class SupportFaqsController {
  constructor(private readonly supportFaqService: SupportFaqService) {}

  @Get()
  async findAll() {
    const supportFaqs = await this.supportFaqService.findAll();
    if (!supportFaqs) {
      throw new NotFoundException();
    }
    return supportFaqs;
  }
}
