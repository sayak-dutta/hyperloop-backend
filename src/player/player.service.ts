import { InjectModel } from '@nestjs/mongoose';
import { Player, PlayerDocument } from './player.schema';
import { Model } from 'mongoose';

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
    let playerLevel = playerDocument.playerLevel;
    if(playerLevel == 1){
      return playerLevel;
    }
    else if( playerLevel == 2){
      
    }
    let boardPlayerLevel = await this.playerModel.find({level: playerLevel}).lean().exec();
    return boardPlayerLevel;
    // return new this.playerModel(playerDocument).save();
  }

  async update(id: string, playerDocument: any): Promise<any> {
    return this.playerModel.findByIdAndUpdate(id, playerDocument, {
      returnDocument: 'after',
    });
  }

  async remove(id: string) {
    return this.playerModel.findByIdAndDelete(id);
  }

//   async createPlayerLevel(playerDocument: any): Promise<any>{
//     let playerLevel = playerDocument.playerLevel;
//     let boardPlayerLevel = await this.playerModel.find({level: playerLevel}).lean().exec();
//     return boardPlayerLevel;
//   }
// }

}