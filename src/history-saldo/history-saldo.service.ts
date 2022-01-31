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

    // async create() {
    //     return 'this is create'
    // }
}
