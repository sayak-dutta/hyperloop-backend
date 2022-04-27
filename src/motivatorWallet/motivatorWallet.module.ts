import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  motivatorWalletController,
  motivatorWalletsController,
  motivatorWalletTransactionController,
  motivatorWalletTransactionsController,
} from './motivatorWallet.controller';
import {
  MotivatorWallet,
  MotivatorWalletSchema,
  MotivatorWalletTransaction,
  MotivatorWalletTransactionSchema,
} from './motivatorWallet.schema';
import {
  motivatorWalletService,
  motivatorWalletTransactionService,
} from './motivatorWallet.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MotivatorWallet.name,
        schema: MotivatorWalletSchema,
      },
      {
        name: MotivatorWalletTransaction.name,
        schema: MotivatorWalletTransactionSchema,
      },
    ]),
  ],
  providers: [motivatorWalletService, motivatorWalletTransactionService],
  controllers: [
    motivatorWalletController,
    motivatorWalletsController,
    motivatorWalletTransactionController,
    motivatorWalletTransactionsController,
  ],
  exports: [motivatorWalletService, motivatorWalletTransactionService],
})
export class MotivatorWalletModule {}
