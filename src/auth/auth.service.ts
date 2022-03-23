import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserSession, UserSessionDocument } from "./schemas/user-session.schema";
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import mongoose from "mongoose";


@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        @InjectModel(UserSession.name) private userSessionModel: Model<UserSessionDocument>
        ){}

    async getSession(sessionId: string) {
        return await this.userSessionModel
        .findById(sessionId)
        .exec()
    }

    async createUserSession(userDoc: any, ipAddress: any, userAgent: any){
        // const sessionCount = await this.userSessionModel.count({
        //     userId: userDoc._id
        // })

        let sessionId = new mongoose.Types.ObjectId();
        let userId = userDoc._id;
        let jwtToken = await this.jwtService.signAsync({
            sessionId
        })
        let jwtPayload = await this.jwtService.verifyAsync(jwtToken);
        let issuedAt = new Date(jwtPayload.iat * 1000);
        let expiresAt = new Date(jwtPayload.exp * 1000);
        let userSession = new this.userSessionModel({
            _id: sessionId,
            userId,
            ipAddress,
            userAgent,
            issuedAt,
            expiresAt 
        })
        await userSession.save();
        return jwtToken;
    }

    async deleteUserSession(sessionId: string){
        return await this.userSessionModel.deleteOne({
            _id: sessionId
        });
    }
}