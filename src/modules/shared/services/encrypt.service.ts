import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

@Injectable()
export class EncryptService {

    saltRounds = 10;

    async run(text: string): Promise<string> {
        const ret = await hash(text, this.saltRounds)
        return ret;  
    }
}
