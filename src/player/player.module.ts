import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Board, BoardSchema } from 'src/board/board.schema';
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
  providers: [PlayerService],
  controllers: [PlayerController, PlayersController, PlayerLevelFilterController, AddPlayertoBoardController, FilterPlayerByUserId],
  exports: [PlayerService],
})
export default class PlayerModule {}
