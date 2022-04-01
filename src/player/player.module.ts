import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PlayerController, PlayerControllers } from "./player.controller";
import { Player, PlayerSchema } from "./player.schema";
import { PlayerService } from "./player.service";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: Player.name,
                schema: PlayerSchema
            }
        ])
    ],
    providers:[PlayerService],
    controllers:[PlayerController, PlayerControllers],
    exports:[PlayerService]
})
export default class PlayerModule {};