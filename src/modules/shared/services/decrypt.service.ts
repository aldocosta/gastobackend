import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';


@Injectable()
export class DecryptCompareService {

    saltRounds = 10;

    async run(text: string, hash: string): Promise<boolean> {
        return compare(text, hash)
    }
}
