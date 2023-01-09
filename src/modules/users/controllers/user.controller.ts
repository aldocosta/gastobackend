import { Controller, Get, Post, UseGuards, Request, Inject, Body, Delete, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'modules/auth/decorators/jwt-auth.guard';
import { UserDto } from '../dto/user.dto';
import { AddUserService } from '../services/addUser.service';
import { DeleteArrayUsersService } from '../services/deleteArrayUsers.service';
import { FindAllUserService } from '../services/findAllUser.service';
import { FindUserByMongoIDService } from '../services/findUserByMongoID.service';


@Controller("users")
export class UsersController {
  constructor(
    private readonly addUserService: AddUserService,
    private readonly findAllUserService: FindAllUserService,
    private readonly deleteArrayUsersService: DeleteArrayUsersService,
    private readonly findUserByMongoIDService: FindUserByMongoIDService) { }

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async create(@Body() user: UserDto) {
    return this.addUserService.run(user)
  }

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  async all() {
    return this.findAllUserService.run()
  }

  @Get('/byid/:id')
  @UseGuards(JwtAuthGuard)
  async getBydId(@Param('id') id: string) {
    return this.findUserByMongoIDService.run(id)
  }

  @Delete('/byids')
  @UseGuards(JwtAuthGuard)
  async byIds(@Body() ids) {
    return await this.deleteArrayUsersService.run(ids)
  }


}
