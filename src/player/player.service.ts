/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { InjectModel } from '@nestjs/mongoose';
import { Player, PlayerDocument } from './player.schema';
import { Model } from 'mongoose';
import { BoardDocument, Board } from 'src/board/board.schema';
import { Mode } from 'fs';
import { BoardService } from 'src/board/board.service';

export class PlayerService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<PlayerDocument>,
    @InjectModel(Board.name) private boardModel: Model<BoardDocument>,
    private readonly boardService: BoardService
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

  async filterPlayerByUserId(playerDocument:any): Promise<any>{
    let player = await (await this.playerModel.findOne({user: playerDocument.user_id})).populate('board')
    return player;
  }

  async filterPlayerLevel(playerDocument: any): Promise<any>{
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
    let board_instance = await this.boardModel.findOne({boardNo: playerDocument.boardNo}).lean().exec()

    playerDocument.playerNo = 15;
    playerDocument.level = 4;
    playerDocument.board = board_instance?._id;
    playerDocument.referCount = 0;

    delete playerDocument.boardNo;
    console.log(playerDocument)
    
    let playersList = await this.playerModel.find({board: playerDocument.board}).lean().exec();

    // If player list length is less than or equals to 14 that is board is not full then player is added and also refer count is all same

    if(playersList.length <= 14){
      for(let i=0; i<playersList.length; i++){
        playersList[i].playerNo = playersList[i].playerNo - 1;
        console.log(playersList[i]);
        await this.playerModel.findByIdAndUpdate(playersList[i]._id, playersList[i]);
      }
      let new_player = new this.playerModel(playerDocument).save();
      return new_player;
    }
    // If board is full
    else if(playersList.length == 15){
      let board1 = await this.boardService.create({
        boardPlayerCount: 0,
        boardName: 'Bronze',
        boardType: 'Player'
      });
      let board2 = await this.boardService.create({
        boardPlayerCount: 0,
        boardName: 'Bronze',
        boardType: 'Player'
      });
      
      for(let i=0; i<playersList.length; i++){
        if(playersList[i].playerNo == 15 || playersList[i].playerNo == 14 || playersList[i].playerNo == 13 || playersList[i].playerNo == 12 || playersList[i].playerNo == 7 || playersList[i].playerNo == 6 || playersList[i].playerNo == 3){

          // checking player belonging to left board

          if(playersList[i].playerNo == 15 || playersList[i].playerNo == 14 || playersList[i].playerNo == 13 || playersList[i].playerNo == 12){
            playersList[i].playerNo = playersList[i].playerNo - 8;
            playersList[i].board = board1._id;
          }
          else if(playersList[i].playerNo == 7 || playersList[i].playerNo == 6){
            playersList[i].playerNo = playersList[i].playerNo - 4;
            playersList[i].board = board1._id;
          }
          else if(playersList[i].playerNo == 3){
            playersList[i].playerNo = playersList[i].playerNo - 2;
            playersList[i].board = board1._id;
          }
          
        }
        else if(playersList[i].playerNo == 11 || playersList[i].playerNo == 10 || playersList[i].playerNo == 9 || playersList[i].playerNo == 8 || playersList[i].playerNo == 5 || playersList[i].playerNo == 4 || playersList[i].playerNo == 2){
          // checking player belonging to left or right board
          if(playersList[i].playerNo == 11 || playersList[i].playerNo == 10 || playersList[i].playerNo == 9 || playersList[i].playerNo == 8){
            playersList[i].playerNo = playersList[i].playerNo - 4;
            playersList[i].board = board2._id;
          }
          else if( playersList[i].playerNo == 5 || playersList[i].playerNo == 4){
            playersList[i].playerNo = playersList[i].playerNo - 2;
            playersList[i].board = board2._id;
          }
          else if(playersList[i].playerNo == 2){
            playersList[i].playerNo = playersList[i].playerNo - 1;
            playersList[i].board = board2._id;
          }
        }
        console.log(playersList[i]);
        await this.playerModel.findByIdAndUpdate(playersList[i]._id, playersList[i]);
      }
    }
  }
}