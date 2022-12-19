import { Module } from '@nestjs/common';
import { DecryptService } from './services/decrypt.service';
import { EncryptService } from './services/encrypt.service';

@Module({
    providers: [EncryptService, DecryptService],
    exports: [EncryptService, DecryptService]
})
export class SharedModule {

}
