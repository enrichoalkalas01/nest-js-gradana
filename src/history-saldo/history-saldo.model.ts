import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type HistorySaldoDocument = HistorySaldo & Document;

@Schema()
export class HistorySaldo {
    @Prop()
    saldoId: string;

    @Prop()
    saldo: string;

    @Prop()
    tgl_topup: Date;
}

export const HistorySaldoSchema = SchemaFactory.createForClass(HistorySaldo)