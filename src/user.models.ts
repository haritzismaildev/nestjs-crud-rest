import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop()
    username: string ;

    @Prop()
    password: string ;

    @Prop()
    confirm_password: string ;

    @Prop()
    email: string ;

    @Prop()
    interest: string ;

    @Prop()
    about: string ;

    @Prop({ default:Date.now })
    date_add: Date ;
}

export const UserSchema = SchemaFactory.createForClass(User)