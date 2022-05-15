import { InjectModel } from '@nestjs/mongoose';
import { Player, PlayerDocument } from './player.schema';
import { Model } from 'mongoose';
import { BoardDocument } from 'src/board/board.schema';

export class PlayerService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<PlayerDocument>,
  ) {}

  async findOneById(id: string) {
    return await this.playerModel.findById(id);
  }

  async findAll() {
    return await this.playerModel.find().lean().exec();
  }

  async create(playerDocument: any): Promise<any> {
     return new this.playerModel(playerDocument).save();

  }

  async filterPlayerLevel(playerDocument: any, BoardDocument:any): Promise<any>{
    // let boardNo = BoardDocument.boardNo;
    let level = playerDocument.level ;
     console.log(level);
    let player = await this.playerModel.find({level: level}).lean().exec();
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
}