import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'modules/infra/mongoose/schemas/bussiness.schemas/user/user.schema';
import { EncryptService } from 'modules/shared/services/encrypt.service';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class DeleteArrayUsersService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly encryptService: EncryptService
  ) { }

  async run(ids: string[]): Promise<IUser[] | undefined> {
    return this.userModel.remove({
      _id: {
        $in: ids.map((_id) => {
          return new mongoose.Types.ObjectId(_id)
        })
      }
    });
  }

}