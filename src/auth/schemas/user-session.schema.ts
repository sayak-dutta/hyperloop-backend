import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/user/user.schema";


export type UserSessionDocument = UserSession & Document;

@Schema({
    timestamps: true
})
class UserSession {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: User.name,
        required: true,
    })
    userId: string;

    @Prop()
    ipAddress: string;

    @Prop()
    userAgent: string;

    @Prop()
    issuedAt: string;

    @Prop()
    expiresAt: string;
}

export const UserSessionSchema = SchemaFactory.createForClass(UserSession);



