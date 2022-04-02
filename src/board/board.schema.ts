import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type BoardDocument = Board & Document;

@Schema()
export class Board{
    @Prop({})
    boardNo: number;

    @Prop({})
    boardPlayerCount: number;

    @Prop({})
    boardName: string;

    @Prop()
    boardType: string;
}

export const BoardSchema = SchemaFactory.createForClass(Board);