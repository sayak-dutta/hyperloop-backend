/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Board, BoardSchema } from 'src/board/board.schema';
import { BoardService } from 'src/board/board.service';
import { PlayerController, PlayersController,PlayerLevelFilterController, AddPlayertoBoardController, FilterPlayerByUserId } from './player.controller';
import { Player, PlayerSchema } from './player.schema';
import { PlayerService } from './player.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Player.name,
        schema: PlayerSchema,
      },
      {
        name: Board.name,
        schema: BoardSchema
      }
    ]),
  ],
  providers: [PlayerService, BoardService],
  controllers: [PlayerController, PlayersController, PlayerLevelFilterController, AddPlayertoBoardController, FilterPlayerByUserId],
  exports: [PlayerService],
})
export default class PlayerModule {}
