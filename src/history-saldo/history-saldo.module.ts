import { Module } from '@nestjs/common';
import { HistorySaldoService } from './history-saldo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HistorySaldo, HistorySaldoSchema } from './history-saldo.model';
import { HistorySaldoController } from './history-saldo.controller';

@Module({
  imports: [
    MongooseModule.forFeature([ { name: HistorySaldo.name, schema: HistorySaldoSchema } ])
  ],
  controllers: [HistorySaldoController],
  providers: [HistorySaldoService],
  exports: [HistorySaldoService]
})
export class HistorySaldoModule {}
