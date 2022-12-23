import { Module } from '@nestjs/common';
import { DecryptCompareService } from './services/decrypt.service';
import { EncryptService } from './services/encrypt.service';

@Module({
    providers: [EncryptService, DecryptCompareService],
    exports: [EncryptService, DecryptCompareService]
})
export class SharedModule {

}
