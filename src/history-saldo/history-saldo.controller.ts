import { Controller, Get } from '@nestjs/common';
import { HistorySaldoService } from './history-saldo.service';

@Controller('history-saldo')
export class HistorySaldoController {
    constructor(
        private historySaldoService: HistorySaldoService
    ) {}

    @Get()
    async all() {
        return this.historySaldoService.all()
    }
}
