import { Controller, Get, Post } from '@nestjs/common';
import { SaldoService } from './saldo.service';

@Controller('saldo')
export class SaldoController {
    constructor(
        private saldoService: SaldoService
    ) {}

    @Get()
    async getSaldo() {
        return this.saldoService.all()
    }

    @Post()
    async createSaldo() {

    }
}
