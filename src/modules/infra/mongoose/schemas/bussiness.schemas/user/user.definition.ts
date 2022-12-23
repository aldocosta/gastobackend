import { ModelDefinition } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';

export const UserDefinition: ModelDefinition = {
  name: User.name,
  schema: UserSchema  
};
