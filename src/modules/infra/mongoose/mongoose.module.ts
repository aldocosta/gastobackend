import { mongoDbConfig, mongoDbConfigName } from '@environments';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [    
    MongooseModule.forRoot(mongoDbConfig.MONGO_CORE_URL)
  ],
})
export class MongoDbModule { }
