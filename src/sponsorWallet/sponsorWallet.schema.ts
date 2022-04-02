import { Prop, Schema, SchemaFactory,  } from "@nestjs/mongoose";
import { User } from "src/user/user.schema";
import { SchemaTypes, Document } from 'mongoose';


export type SponsorWalletDocument = SponsorWallet & Document;

@Schema()
export class SponsorWallet {
    @Prop({
        ref: User.name,
        type: SchemaTypes.ObjectId
    })
    user_id: string;

    @Prop()
    balance: number;
}

export const SponsorWalletSchema = SchemaFactory.createForClass(SponsorWallet);

export type SponsorWalletTransactionDocument = Document & SponsorWalletTransaction;

@Schema()
export class SponsorWalletTransaction {
    @Prop()
    transactionId: string;

    @Prop({
        ref: SponsorWallet.name,
        type: SchemaTypes.ObjectId,
    })
    sponsorWalletId: string;    

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

export const SponsorWalletTransactionSchema = SchemaFactory.createForClass(SponsorWalletTransaction);