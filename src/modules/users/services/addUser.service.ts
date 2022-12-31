import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'modules/infra/mongoose/schemas/bussiness.schemas/user/user.schema';
import { EncryptService } from 'modules/shared/services/encrypt.service';
import { Model } from 'mongoose';

@Injectable()
export class AddUserService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly encryptService: EncryptService
  ) { }

  async run(user: IUserCreate): Promise<IUser | undefined> {
    user.password = await this.encryptService.run(user.password)
    return this.userModel.create(user)
  }

  // async create(): Promise<any | undefined> {

  //   const user = {
  //     name: 'aldo', 
  //     email: 'aldo@aldo.com',
  //     password: await this.encryptService.run('123')
  //   }

  //   await this.userModel.create(user)

  // }
}