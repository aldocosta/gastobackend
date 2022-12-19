import { mongoDbConfigName } from '@environments';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controllers/user.controller';
import { UserDefinition } from './models/user.definition';
import { User } from './models/user.schema';
import { FindUserService } from './services/findUser.service';

@Module({
  imports: [    
    MongooseModule.forFeature(
      [UserDefinition]      
    ),
  ],
  controllers: [UsersController],
  providers: [FindUserService],
  exports:[FindUserService]
})
export class UsersModule { }
