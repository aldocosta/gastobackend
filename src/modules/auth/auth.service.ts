import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DecryptCompareService } from 'modules/shared/services/decrypt.service';
import { FindUserService } from 'modules/users/services/findUser.service';

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
    const payload = { username: user._doc.email, sub: user._doc.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
