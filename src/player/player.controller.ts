  import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlayerCreateDto, PlayerUpdateDTO } from './player.dto';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get(':id')
  async findOne(@Param() { id }) {
    const player = await this.playerService.findOneById(id);
    if (!player) {
      throw new NotFoundException();
    }
    return player;
  }

  @Post()
  async create(@Body() playerDocument: PlayerCreateDto) {
    try {
      const player = await (
        await this.playerService.create(playerDocument)
      ).save();
      return player.toJSON();
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(@Param() { id }, @Body() playerDocument: PlayerUpdateDTO) {
    const player = await this.playerService.update(id, playerDocument);
    if (!player) {
      throw new NotFoundException();
    }
    return player;
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    const player = await this.playerService.remove(id);
    if (!player) {
      throw new NotFoundException();
    }
    return player;
  }
}

@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  async findAll() {
    const players = await this.playerService.findAll();
    if (!players) {
      throw new NotFoundException();
    }
    return players;
  }
}

@Controller('filter-player-level')
export class PlayerLevelFilterController{
    constructor(private readonly playerService: PlayerService){};
    @Post()
    async filterPlayerLevelById(@Body() playerDocument:any){
        let boardPlayerLevel = await this.playerService.create(playerDocument);
        return boardPlayerLevel;
    }
}


