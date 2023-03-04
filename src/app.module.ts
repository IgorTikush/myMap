import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from 'config';

import { TokenModule } from './token/token.module';
import { UserModule } from './user/user.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganInterceptor, MorganModule } from 'nest-morgan';

@Module({
  imports: [
    MongooseModule.forRoot(config.get('mongo')),
    MorganModule,
    TokenModule,
    UserModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule {}
