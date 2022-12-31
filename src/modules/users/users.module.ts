import { mongoDbConfigName } from '@environments';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from 'modules/shared/shared.module';
import { UsersController } from './controllers/user.controller';
import { UserDefinition } from '../infra/mongoose/schemas/bussiness.schemas/user/user.definition';
import { FindUserService } from './services/findUser.service';
import { AddUserService } from './services/addUser.service';
import { FindAllUserService } from './services/findAllUser.service';
import { DeleteArrayUsersService } from './services/deleteArrayUsers.service';

@Module({
  imports: [  
    SharedModule,
    MongooseModule.forFeature(
      [UserDefinition]      
    ),
  ],
  controllers: [UsersController],
  providers: [
    FindUserService,
    FindAllUserService,
    DeleteArrayUsersService,
    AddUserService],
  exports:[FindUserService]
})
export class UsersModule { }
