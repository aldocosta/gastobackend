import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MongoBussinessCollectionNames } from 'modules/infra/mongoose/constants/bussiness.collection-names';
import { Document } from 'mongoose';

import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;// & Document;

@Schema()
export class User {
  @Prop({ index: true })
  id: string;

  @Prop({ index: true })
  name: string;

  @Prop({ index: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  active: boolean;

  @Prop()
  date: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
