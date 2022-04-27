import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  MotivatorWalletCreateDTO,
  MotivatorWalletTransactionCreateDTO,
  MotivatorWalletTransactionUpdateDTO,
  MotivatorWalletUpdateDTO,
} from './motivatorWallet.dto';
import {
  motivatorWalletService,
  motivatorWalletTransactionService,
} from './motivatorWallet.service';

@Controller('motivator-wallet')
export class motivatorWalletController {
  constructor(
    private readonly motivatorWalletService: motivatorWalletService,
  ) {}

  @Get(':id')
  async findOneById(@Param() { id }) {
    const motivatorWallet = await this.motivatorWalletService.findOneById(id);
    if (!motivatorWallet) {
      throw new NotFoundException();
    }
    return motivatorWallet;
  }

  @Post()
  async create(@Body() motivatorWalletDocument: MotivatorWalletCreateDTO) {
    try {
      const motivatorWallet = await this.motivatorWalletService.create(
        motivatorWalletDocument,
      );
      return motivatorWallet;
    } catch (e) {
      if (e.code === 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(
    @Param() { id },
    @Body() motivatorWalletDocument: MotivatorWalletUpdateDTO,
  ) {
    const motivatorWallet = await this.motivatorWalletService.update(
      id,
      motivatorWalletDocument,
    );
    if (!motivatorWallet) {
      throw new NotFoundException();
    }
    return motivatorWallet;
  }

  @Delete(':id')
  async remove(@Param() { id }) {
    const motivatorWallet = await this.motivatorWalletService.remove(id);
    if (!motivatorWallet) {
      throw new NotFoundException();
    }
    return motivatorWallet;
  }
}

@Controller('motivator-wallets')
export class motivatorWalletsController {
  constructor(
    private readonly motivatorWalletService: motivatorWalletService,
  ) {}

  @Get()
  async findAll() {
    const motivatorWallets = await this.motivatorWalletService.findAll();
    if (!motivatorWallets) {
      throw new NotFoundException();
    }
    return motivatorWallets;
  }
}

@Controller('motivator-wallet-transaction')
export class motivatorWalletTransactionController {
  constructor(
    private readonly motivatorWalletTransactionService: motivatorWalletTransactionService,
  ) {}

  @Get(':id')
  async findOneById(@Param() { id }) {
    const motivatorWalletTransaction =
      await this.motivatorWalletTransactionService.findOneById(id);
    if (!motivatorWalletTransaction) {
      throw new NotFoundException();
    }
    return motivatorWalletTransaction;
  }

  @Post()
  async create(
    @Body()
    motivatorWalletTransactionDocument: MotivatorWalletTransactionCreateDTO,
  ) {
    try {
      const motivatorTransactionWallet =
        await this.motivatorWalletTransactionService.create(
          motivatorWalletTransactionDocument,
        );
      return motivatorTransactionWallet;
    } catch (e) {
      if (e.code == 11000) {
        throw new BadRequestException();
      }
      throw e;
    }
  }

  @Patch(':id')
  async update(
    @Param() { id },
    @Body()
    motivatorWalletTransactionDocument: MotivatorWalletTransactionUpdateDTO,
  ) {
    const motivatorTransactionWallet =
      await this.motivatorWalletTransactionService.update(
        id,
        motivatorWalletTransactionDocument,
      );
    if (!motivatorTransactionWallet) {
      throw new NotFoundException();
    }
    return motivatorTransactionWallet;
  }

  @Delete(':id')
  async remove(@Param() { id }) {
    const motivatorTransactionWallet =
      await this.motivatorWalletTransactionService.remove(id);
    if (!motivatorTransactionWallet) {
      throw new NotFoundException();
    }
    return motivatorTransactionWallet;
  }
}

@Controller('motivator-wallet-transactions')
export class motivatorWalletTransactionsController {
  constructor(
    private readonly motivatorWalletTransactionService: motivatorWalletTransactionService,
  ) {}

  @Get()
  async findAll() {
    const motivatorTransactionWallets =
      await this.motivatorWalletTransactionService.findAll();
    if (!motivatorTransactionWallets) {
      throw new NotFoundException();
    }
    return motivatorTransactionWallets;
  }
}
