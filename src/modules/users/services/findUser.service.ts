import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'modules/infra/mongoose/schemas/bussiness.schemas/user/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class FindUserService {

  constructor( 
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>    
  ) { }

  async run(user: IUser): Promise<IUser | undefined> {
        return this.userModel.findOne({ email: user.email })
  }

}