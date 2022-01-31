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
        return this.profileDetail.find().exec()
    }
}
