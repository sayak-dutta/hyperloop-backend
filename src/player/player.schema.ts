import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.schema';
import { Document, SchemaTypes } from 'mongoose';
import { Board } from 'src/board/board.schema';

export type PlayerDocument = Player & Document;

@Schema()
export class Player {
  @Prop({
    ref: User.name,
    type: SchemaTypes.ObjectId,
  })
  user: string;

  @Prop({
    ref: Board.name,
    type: SchemaTypes.ObjectId,
  })
  board: string;

  @Prop()
  level: number;

  @Prop({
    ref: Player.name,
    type: SchemaTypes.ObjectId,
  })
  parent: string;

  @Prop()
  playerNo: number;

  @Prop()
  referCount: number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
