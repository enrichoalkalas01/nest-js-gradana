import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HistorySaldo, HistorySaldoDocument } from './history-saldo.model';

@Injectable()
export class HistorySaldoService {
    constructor(
        @InjectModel(HistorySaldo.name) private readonly historySaldoModel: Model<HistorySaldoDocument>
    ) { }

    async all() {
        return this.historySaldoModel.find().exec()
    }

    async create(params) {
        const historyData = new HistorySaldo
        
        historyData.saldoId = params.token._id
        historyData.saldo = params.saldo
        historyData.tgl_topup = new Date()

        const HistoryCreate = new this.historySaldoModel(historyData)
        return HistoryCreate.save()
    }
}
