import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
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
    private readonly encryptService: EncryptService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const userDto = new UserDto();
    userDto.email = username;
    userDto.password = await this.encryptService.run(pass);

    const user: any = await this.userService.findOne(userDto);
    // if (user && user.password === pass) {
    if (user && user.password) {
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


