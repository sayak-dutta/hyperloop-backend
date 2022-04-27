import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/user.schema';
import { SchemaTypes, Document } from 'mongoose';

export type MotivatorWalletDocument = MotivatorWallet & Document;

@Schema()
export class MotivatorWallet {
  @Prop({
    ref: User.name,
    type: SchemaTypes.ObjectId,
  })
  user_id: string;

  @Prop()
  balance: number;
}

export const MotivatorWalletSchema =
  SchemaFactory.createForClass(MotivatorWallet);

export type MotivatorWalletTransactionDocument = Document &
  MotivatorWalletTransaction;

@Schema()
export class MotivatorWalletTransaction {
  @Prop()
  transactionId: string;

  @Prop({
    ref: MotivatorWallet.name,
    type: SchemaTypes.ObjectId,
  })
  MotivatorWalletId: string;

  @Prop()
  transactionDate: string;

  @Prop()
  transactionTime: string;

  @Prop()
  transactionAmount: string;

  @Prop()
  transactionType: string;

  @Prop()
  transactionState: string;
}

export const MotivatorWalletTransactionSchema = SchemaFactory.createForClass(
  MotivatorWalletTransaction,
);
