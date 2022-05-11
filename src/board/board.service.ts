import { InjectModel } from "@nestjs/mongoose";
import { Board, BoardDocument } from "./board.schema";
import { Model } from 'mongoose';


export class BoardService {

    constructor(
        @InjectModel(Board.name) private boardModel:Model<BoardDocument>
    ){}

    async findOneById(id:string){
        return this.boardModel.findById(id).lean().exec();
    }

    async findAll(){
        return this.boardModel.find().lean().exec();
    }

    async create(boardDocument:any):Promise<any>{
        return new this.boardModel(boardDocument).save();
    }

    async filterBoardWithId(boardDocument: any): Promise<any>{
       let boardId = boardDocument.boardNumber ;
       let currentDate= new Date();
       let boardId1 = "BRZP"+`${currentDate.getDate()}${currentDate.getMonth()+1}${currentDate.getFullYear()}${currentDate.getHours()}${currentDate.getMinutes()}${currentDate.getSeconds()}`;
       let boardId2 = await this.boardModel.find({boardNo: boardId}).lean().exec();
        
        return boardId1;
    }

    async filterBoardWithType(boardDocument: any): Promise<any>{
        let boardType = boardDocument.boardType;
        let boards = await this.boardModel.find({boardType: boardType}).lean().exec();
        return boards;
    }


    async update(id:string, boardDocument:any):Promise<any>{
       return this.boardModel.findByIdAndUpdate(id, boardDocument,{
           returnDocument: 'after'
       }).exec();
    }

    async remove(id:string):Promise<any>{
        return this.boardModel.findByIdAndRemove(id).exec();
    }

  
}