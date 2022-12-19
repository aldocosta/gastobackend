import { Module } from '@nestjs/common';
import { EncryptService } from 'modules/shared/services/encrypt.service';
import { SharedModule } from 'modules/shared/shared.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongoDbModule } from './modules/infra/mongoose/mongoose.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [    
    MongoDbModule,
    AuthModule,
    UsersModule    
  ],
  controllers: [AppController],
  providers: [AppService,EncryptService],
})
export class AppModule { }
