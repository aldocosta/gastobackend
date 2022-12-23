import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'modules/infra/mongoose/schemas/bussiness.schemas/user/user.schema';
import { EncryptService } from 'modules/shared/services/encrypt.service';
import { Model } from 'mongoose';

@Injectable()
export class FindUserService {

  constructor( 
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,    
    private readonly encryptService: EncryptService
  ) { }

  async run(user: IUser): Promise<IUser | undefined> {
        return this.userModel.findOne({ email: user.email })
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