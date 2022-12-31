import { Controller, Get, Post, UseGuards, Request, Inject, Body, Delete } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { AddUserService } from '../services/addUser.service';
import { DeleteArrayUsersService } from '../services/deleteArrayUsers.service';
import { FindAllUserService } from '../services/findAllUser.service';


@Controller("users")
export class UsersController {
  constructor(
    private readonly addUserService: AddUserService,
    private readonly findAllUserService: FindAllUserService,
    private readonly deleteArrayUsersService: DeleteArrayUsersService) { }

  // @Post('auth/logins')
  // async login(@Request() req) {
  //   console.log(req.user)
  //   return null;  //this.userService.findOne(req.user);
  // }

  @Post('/create')
  async create(@Body() user: UserDto) {
    return this.addUserService.run(user)
  }

  @Get('/all')
  async all() {
    return this.findAllUserService.run()
  }

  @Delete('/byids')
  async byIds(@Body() ids) {
    return await this.deleteArrayUsersService.run(ids)
  }


}
