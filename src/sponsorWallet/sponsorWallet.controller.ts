import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { SponsorWalletCreateDTO, SponsorWalletTransactionCreateDTO, SponsorWalletTransactionUpdateDTO, SponsorWalletUpdateDTO } from "./sponsorWallet.dto";
import { sponsorWalletService, sponsorWalletTransactionService } from "./sponsorWallet.service";


@Controller('sponsor-wallet')
export class sponsorWalletController{
    constructor(private readonly sponsorWalletService: sponsorWalletService){};

    @Get(':id')
    async findOneById(@Param() { id }){
        const sponsorWallet = await this.sponsorWalletService.findOneById(id);
        if(!sponsorWallet){
            throw new NotFoundException();
        }
        return sponsorWallet;
    }

    @Post()
    async create(@Body() sponsorWalletDocument: SponsorWalletCreateDTO){
        try{
            const sponsorWallet = await this.sponsorWalletService.create(sponsorWalletDocument);
            return sponsorWallet;
        }catch(e){
            if(e.code === 11000){
                throw new BadRequestException();
            }
            throw e;
        }
    }

    @Patch(':id')
    async update(@Param() {id}, @Body() sponsorWalletDocument: SponsorWalletUpdateDTO){
        const sponsorWallet = await this.sponsorWalletService.update(id, sponsorWalletDocument);
        if(!sponsorWallet){
            throw new NotFoundException();
        }
        return sponsorWallet;
    }

    @Delete(':id')
    async remove(@Param() {id}){
        const sponsorWallet = await this.sponsorWalletService.remove(id);
        if(!sponsorWallet){
            throw new NotFoundException();
        }
        return sponsorWallet;
    }

}

@Controller('sponsor-wallets')
export class sponsorWalletsController{
    constructor(private readonly sponsorWalletService: sponsorWalletService){};
    
    @Get()
    async findAll(){
        const sponsorWallets = await this.sponsorWalletService.findAll();
        if(!sponsorWallets){
            throw new NotFoundException();
        }
        return sponsorWallets;
    }
}

@Controller('sponsor-wallet-transaction')
export class sponsorWalletTransactionController{
    constructor(private readonly sponsorWalletTransactionService: sponsorWalletTransactionService){};

    @Get(':id')
    async findOneById(@Param() {id}){
        const sponsorWalletTransaction = await this.sponsorWalletTransactionService.findOneById(id);
        if(!sponsorWalletTransaction){
            throw new NotFoundException();
        }
        return sponsorWalletTransaction;
    }

    @Post()
    async create(@Body() sponsorWalletTransactionDocument: SponsorWalletTransactionCreateDTO){
        try{
            const sponsorTransactionWallet = await this.sponsorWalletTransactionService.create(sponsorWalletTransactionDocument);
            return sponsorTransactionWallet;
        }catch(e){
            if(e.code == 11000){
                throw new BadRequestException();
            }
            throw e;
        }
    }

    @Patch(':id')
    async update(@Param() {id}, @Body() sponsorWalletTransactionDocument: SponsorWalletTransactionUpdateDTO){
        const sponsorTransactionWallet = await this.sponsorWalletTransactionService.update(id, sponsorWalletTransactionDocument);
        if(!sponsorTransactionWallet){
            throw new NotFoundException();
        }
        return sponsorTransactionWallet;
    }

    @Delete(':id')
    async remove(@Param() {id}){
        const sponsorTransactionWallet = await this.sponsorWalletTransactionService.remove(id);
        if(!sponsorTransactionWallet){
            throw new NotFoundException();
        }
        return sponsorTransactionWallet;
    }
}

@Controller('sponsor-wallet-transactions')
export class sponsorWalletTransactionsController{
    constructor(private readonly sponsorWalletTransactionService: sponsorWalletTransactionService){};

    @Get()
    async findAll(){
        const sponsorTransactionWallets = await this.sponsorWalletTransactionService.findAll();
        if(!sponsorTransactionWallets){
            throw new NotFoundException();
        }
        return sponsorTransactionWallets;
    }
}