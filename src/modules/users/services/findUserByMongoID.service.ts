import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'modules/infra/mongoose/schemas/bussiness.schemas/user/user.schema';
import { EncryptService } from 'modules/shared/services/encrypt.service';
import { Model } from 'mongoose';

@Injectable()
export class FindUserByMongoIDService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) { }

  async run(mongoId: string): Promise<IUser | undefined> {
    return this.
      userModel.
      findOne<IUser>({
        _id: mongoId
      }, {
        name: 1,
        email: 1
      });
  }

}