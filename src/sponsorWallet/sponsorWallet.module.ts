import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { sponsorWalletController, sponsorWalletsController, sponsorWalletTransactionController, sponsorWalletTransactionsController } from "./sponsorWallet.controller";
import { SponsorWallet, SponsorWalletSchema, SponsorWalletTransaction, SponsorWalletTransactionSchema } from "./sponsorWallet.schema";
import { sponsorWalletService, sponsorWalletTransactionService } from "./sponsorWallet.service";

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: SponsorWallet.name,
                schema: SponsorWalletSchema
            }, 
            {
                name: SponsorWalletTransaction.name,
                schema: SponsorWalletTransactionSchema
            }
        ])
    ],
    providers:[sponsorWalletService, sponsorWalletTransactionService],
    controllers:[sponsorWalletController, sponsorWalletsController, sponsorWalletTransactionController, sponsorWalletTransactionsController],
    exports:[sponsorWalletService, sponsorWalletTransactionService]
})
export class SponsorWalletModule {};