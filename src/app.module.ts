import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';
import { HistorySaldoModule } from './history-saldo/history-saldo.module';
import { SaldoModule } from './saldo/saldo.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_CONNECTION),
    HistorySaldoModule,
    SaldoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
