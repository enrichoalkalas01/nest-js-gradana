import { Controller, Get, Post, Body, Headers, Res } from '@nestjs/common';
import { SaldoService } from './saldo.service';
import { HistorySaldoService } from 'src/history-saldo/history-saldo.service';
import { Response } from 'express'

@Controller('saldo')
export class SaldoController {
    constructor(
        private saldoService: SaldoService,
        private historySaldo: HistorySaldoService
    ) {}

    @Get()
    async getSaldo() {
        return this.saldoService.all()
    }

    @Post('topup')
    async topUpSaldo(@Headers() headers, @Res() res: Response, @Body() body) {
        let TokenAuth = headers.authorization.split(' ')
        const JWT = require('jsonwebtoken')
        let Token = await JWT.verify(TokenAuth[1], 'secret', (err, ResultVerify) => {
            if ( err ) return false
            if ( ResultVerify ) return ResultVerify
        })

        if ( !Token ) {
            res.sendStatus(400)
        } else {
            let DataFind = await this.saldoService.findOne(Token)
            if ( !DataFind ) {
                res.sendStatus(400)
            } else {
                let DataHistory = await this.historySaldo.create({ token: Token, saldo: Number(body.saldo) })
                if ( !DataHistory ) {
                    res.sendStatus(500)
                } else {
                    let UpdateSaldo = this.saldoService.updateOne({ 
                        token: Token,
                        saldo: ( Number(DataHistory.saldo) + Number(DataFind.saldo) ),
                    })
                    if ( !UpdateSaldo ) {
                        res.sendStatus(500)
                    } else {
                        res.send({
                            message: 'successfull to topup saldo',
                            statusCode: 200,
                        })
                    }
                }
            }
        }
    }
}
