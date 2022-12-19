import { Injectable } from '@nestjs/common';
import { bcrypt } from 'bcrypt'

@Injectable()
export class EncryptService {

    saltRounds = 10;

    async run(text: string): Promise<string> {
        const ret = await bcrypt.hash(text, this.saltRounds)
        return ret;
        // return new Promise((f, r) => {
        //     bcrypt.hash(text, this.saltRounds, function (err, hash) {
        //         if (err) return r(err);
        //         return f(hash)
        //     })
        // })
    }
}
