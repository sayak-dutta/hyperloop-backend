import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.schema';
import { Document, SchemaTypes } from 'mongoose';
import { Board } from 'src/board/board.schema';

export type EditProfileDocument = EditProfile & Document;

@Schema()
export class EditProfile {
  
  player: string;

  @Prop()
  playerName: string;

  @Prop()
  playerPhoneNo: number;

  @Prop()
  playerMobileNo: number;

  @Prop()
  playerEmail: string;
}

export const EditProfileSchema = SchemaFactory.createForClass(EditProfile);
