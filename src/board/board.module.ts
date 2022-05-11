import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BoardController, BoardControllers,BoardTypeFilterController,BoardIdFilterController } from "./board.controller";
import { Board, BoardSchema } from "./board.schema";
import { BoardService } from "./board.service";


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Board.name,
                schema: BoardSchema
            }
        ])
    ],
    providers: [BoardService],
    controllers: [BoardController, BoardControllers, BoardTypeFilterController,BoardIdFilterController],
    exports: [BoardService]
})
export class BoardModule {};