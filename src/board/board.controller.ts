import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { BoardCreateDTO, BoardUpdateDTO } from "./board.dto";
import { BoardService } from "./board.service";

@Controller('board')
export class BoardController{
    constructor(private readonly boardService:BoardService){};
    
    @Get(':id')
    async findOneById(@Param() { id }){
        const board = await this.boardService.findOneById(id);
        if(!board){
            throw new NotFoundException();
        }
        return board;
    }

    @Post()
    async create(@Body() boardDocument: BoardCreateDTO){
        try{
            const board = await this.boardService.create(boardDocument);
            return board.toJSON();
        }catch(e){
            if(e.code === 11000){
                throw new BadRequestException();
            }
            throw e;
        }
    }

    @Patch(':id')
    async update(
        @Param() { id },
        @Body() boardDocument:BoardUpdateDTO
    ){
        const board = await this.boardService.update(id, boardDocument);
        if(!board){
            throw new NotFoundException();
        }
        return board;
    }

    @Delete()
    async remove(@Param() { id }){
        const board = await this.boardService.remove(id);
        if(!board){
            throw new NotFoundException();
        }
        return board;
    }

}


@Controller('boards')
export class BoardControllers{
    constructor(private readonly boardService: BoardService){};

    @Get()
    async findAll(){
        const boards = await this.boardService.findAll();
        if(!boards){
            throw new NotFoundException();
        }
        return boards;
    }
}

@Controller('filter-boards-by-boardtype')
export class BoardTypeFilterController{
    constructor(private readonly boardService: BoardService){};

    @Post()
    async filterBoardByType(@Body() boardDocument:any){
        let boards = await this.boardService.filterBoardWithType(boardDocument);
        return boards;
    }
}