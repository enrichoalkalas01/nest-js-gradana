import { Module } from '@nestjs/common';
import { SaldoController } from './saldo.controller';
import { SaldoService } from './saldo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileDetail, ProfileDetailSchema } from '../profile-detail/profile-detail.model';
import { HistorySaldoModule } from 'src/history-saldo/history-saldo.module';

@Module({
  imports: [
    MongooseModule.forFeature([ { name: ProfileDetail.name, schema: ProfileDetailSchema } ]),
    HistorySaldoModule
  ],
  controllers: [SaldoController],
  providers: [SaldoService],
})

export class SaldoModule {}
