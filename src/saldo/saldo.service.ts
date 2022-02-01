import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfileDetail, ProfileDetailDocument } from 'src/profile-detail/profile-detail.model';


@Injectable()
export class SaldoService {
    constructor(
        @InjectModel(ProfileDetail.name) private readonly profileDetail: Model<ProfileDetailDocument>
    ) { }

    async all() {
        return await this.profileDetail.find().exec()
    }

    async findOne(params) {
        return this.profileDetail.findOne({ "userId": params._id }).exec()
    }

    async create(params) {
        const dataProfile = new ProfileDetail
        
        dataProfile.userId = params.token._id,
        dataProfile.saldo = params.saldoId

        const ProfileCreate = new this.profileDetail
        return ProfileCreate.save()
    }

    async updateOne(params) {
        console.log(params)
        return this.profileDetail.updateOne(
            { 'userId': params.token._id }, { 'userId': params.token._id, 'saldo': params.saldo }
        ).exec()
    }
}
