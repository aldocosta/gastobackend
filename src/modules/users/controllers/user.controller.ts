import { Controller, Get, Post, UseGuards, Request, Inject } from '@nestjs/common';


@Controller()
export class UsersController {
  constructor() {}
  
  @Post('auth/logins')
  async login(@Request() req) {
    console.log(req.user)
    return null;  //this.userService.findOne(req.user);
  }

  
}
