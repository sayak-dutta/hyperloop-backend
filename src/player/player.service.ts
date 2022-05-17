import { InjectModel } from '@nestjs/mongoose';
import { Player, PlayerDocument } from './player.schema';
import { Model } from 'mongoose';
import { BoardDocument, Board } from 'src/board/board.schema';
import { Mode } from 'fs';

export class PlayerService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<PlayerDocument>, @InjectModel(Board.name) private boardModel: Model<BoardDocument>
  ) {}

  async findOneById(id: string) {
    return await this.playerModel.findById(id).populate('parent').populate('user');
  }

  async findAll() {
    return await this.playerModel.find().populate({path: 'parent', populate: {
      path: 'user',
      model: 'User'
    }}).populate('user').lean().exec();
  }

  async create(playerDocument: any): Promise<any> {
     return new this.playerModel(playerDocument).save();

  }

  async filterPlayerLevel(playerDocument: any): Promise<any>{
    // let level = playerDocument.level ;
    let player = await this.playerModel.find({board: playerDocument.board}).populate({path: 'parent', populate: {
      path: 'user',
      model: 'User'
    }}).populate('user').lean().exec();
    return player;
 }

  async update(id: string, playerDocument: any): Promise<any> {
    return this.playerModel.findByIdAndUpdate(id, playerDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.playerModel.findByIdAndDelete(id);
  }


  async addPlayerToBoard(playerDocument: any): Promise<any> {
    playerDocument.playerNo = 15;
    playerDocument.level = 4;

    let playersList = this.playerModel.find({board: playerDocument.board}).lean().exec();
  }
}