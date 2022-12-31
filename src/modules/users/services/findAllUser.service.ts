import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'modules/infra/mongoose/schemas/bussiness.schemas/user/user.schema';
import { EncryptService } from 'modules/shared/services/encrypt.service';
import { Model } from 'mongoose';

@Injectable()
export class FindAllUserService {

  constructor( 
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,    
    private readonly encryptService: EncryptService
  ) { }

  async run(): Promise<IUser[] | undefined> {
        return this.userModel.find<IUser>()
  }

}