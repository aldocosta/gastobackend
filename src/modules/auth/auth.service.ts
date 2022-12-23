import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { DecryptCompareService } from 'modules/shared/services/decrypt.service';
import { EncryptService } from 'modules/shared/services/encrypt.service';
import { User, UserDocument } from 'modules/users/models/user.schema';
import { FindUserService } from 'modules/users/services/findUser.service';
import { Model } from 'mongoose';
import { UserDto } from '../users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: FindUserService,
    private decryptCompareService: DecryptCompareService

  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const _user = {
      password: pass,
      email: username
    }

    const user = await this.userService.run(_user);
    const passOk = await  this.decryptCompareService.run(_user.password,user.password)
    
    if (user && passOk) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


}


