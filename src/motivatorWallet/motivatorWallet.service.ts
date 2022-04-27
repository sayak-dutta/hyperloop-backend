import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  MotivatorWallet,
  MotivatorWalletDocument,
  MotivatorWalletTransaction,
  MotivatorWalletTransactionDocument,
} from './motivatorWallet.schema';
import { Model } from 'mongoose';

@Injectable()
export class motivatorWalletService {
  constructor(
    @InjectModel(MotivatorWallet.name)
    private motivatorWalletModel: Model<MotivatorWalletDocument>,
  ) {}

  async findAll() {
    return await this.motivatorWalletModel.find().lean().exec();
  }

  async findOneById(id: string) {
    return await this.motivatorWalletModel.findById(id).exec();
  }

  async create(motivatorWalletDocument: any) {
    return new this.motivatorWalletModel(motivatorWalletDocument).save();
  }

  async update(id: string, MotivatorWalletDocument: any) {
    return this.motivatorWalletModel
      .findByIdAndUpdate(id, MotivatorWalletDocument, {
        returnDocument: 'after',
      })
      .exec();
  }

  async remove(id: string) {
    return this.motivatorWalletModel.findByIdAndRemove(id);
  }
}

@Injectable()
export class motivatorWalletTransactionService {
  constructor(
    @InjectModel(MotivatorWalletTransaction.name)
    private motivatorWalletTransactionModel: Model<MotivatorWalletTransactionDocument>,
  ) {}

  async findAll() {
    return await this.motivatorWalletTransactionModel.find().lean().exec();
  }

  async findOneById(id: string) {
    return await this.motivatorWalletTransactionModel.findById(id).exec();
  }

  async create(motivatorWalletTransactionDocument: any) {
    return await new this.motivatorWalletTransactionModel(
      motivatorWalletTransactionDocument,
    ).save();
  }

  async update(id: string, motivatorWalletTransactionDocument: any) {
    return await this.motivatorWalletTransactionModel
      .findByIdAndUpdate(id, motivatorWalletTransactionDocument)
      .exec();
  }

  async remove(id: string) {
    return await this.motivatorWalletTransactionModel
      .findByIdAndRemove(id)
      .exec();
  }
}
