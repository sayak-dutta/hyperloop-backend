import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { SponsorWallet, SponsorWalletDocument, SponsorWalletTransaction, SponsorWalletTransactionDocument } from "./sponsorWallet.schema";
import { Model } from 'mongoose';


@Injectable()
export class sponsorWalletService{
    constructor(@InjectModel(SponsorWallet.name) private sponsorWalletModel: Model<SponsorWalletDocument>){};

    async findAll(){
        return await this.sponsorWalletModel.find().lean().exec();
    }

    async findOneById(id: string){
        return await this.sponsorWalletModel.findById(id).exec();
    }

    async create(sponsorWalletDocument:any){
        return new this.sponsorWalletModel(sponsorWalletDocument).save();
    }

    async update(id: string, sponsorWalletDocument:any){
        return this.sponsorWalletModel.findByIdAndUpdate(id, sponsorWalletDocument, {
            returnDocument: 'after'
        }).exec();
    }

    async remove(id: string){
        return this.sponsorWalletModel.findByIdAndRemove(id)
    }

}


@Injectable()
export class sponsorWalletTransactionService{
    constructor(@InjectModel(SponsorWalletTransaction.name) private sponsorWalletTransactionModel: Model<SponsorWalletTransactionDocument>){};

    async findAll(){
        return await this.sponsorWalletTransactionModel.find().lean().exec();
    }

    async findOneById(id: string){
        return await this.sponsorWalletTransactionModel.findById(id).exec();
    }

    async create(sponsorWalletTransactionDocument: any){
        return await new this.sponsorWalletTransactionModel(sponsorWalletTransactionDocument).save();
    }

    async update(id: string, sponsorWalletTransactionDocument: any){
        return await this.sponsorWalletTransactionModel.findByIdAndUpdate(id, sponsorWalletTransactionDocument).exec();
    }

    async remove(id: string){
        return await this.sponsorWalletTransactionModel.findByIdAndRemove(id).exec();
    }
}