import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';



import { Model } from 'mongoose';

import { UserDto } from '../dto/user.dto';
import { User, UserDocument } from '../models/user.schema';

@Injectable()
export class FindUserService {

  constructor( 
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,    
  ) { }

  async findOne(userDto: UserDto): Promise<UserDto | undefined> {
    await this.create()
    return this.userModel.findOne({ email: userDto.email })
  }

  async create(): Promise<any | undefined> {
    const user = {
      name: 'aldo', 
      email: 'aldo@aldo.com',
      password:'123'      
    }

    await this.userModel.create(user)
   
  }
}