import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProfileDetailDocument = ProfileDetail & Document;

@Schema()
export class ProfileDetail {
    @Prop()
    userId: string;

    @Prop()
    saldo: string;
}

export const ProfileDetailSchema = SchemaFactory.createForClass(ProfileDetail)