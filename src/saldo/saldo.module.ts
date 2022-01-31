import { Module } from '@nestjs/common';
import { SaldoController } from './saldo.controller';
import { SaldoService } from './saldo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileDetail, ProfileDetailSchema } from '../profile-detail/profile-detail.model';

@Module({
  imports: [
    MongooseModule.forFeature([ { name: ProfileDetail.name, schema: ProfileDetailSchema } ])
  ],
  controllers: [SaldoController],
  providers: [SaldoService],
})

export class SaldoModule {}
