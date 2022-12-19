import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt'


@Injectable()
export class DecryptService {

    saltRounds = 10;

    async run(text: string, hash: string): Promise<boolean> {
        return new Promise((f, r) => {
            bcrypt.compare(text, hash, (err, hash) => {
                if (err) r(err);
                f(hash)
            })
        })
    }
}
