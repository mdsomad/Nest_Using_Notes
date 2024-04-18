import { Module } from '@nestjs/common';
import { Usercontroller } from './user.controller';

@Module({
  controllers: [Usercontroller],
})
export class AppModule {}
