import { Module } from '@nestjs/common';
import { Usercontroller } from './user.controller';
import { AlbumsController } from './albums.controller';

@Module({
  controllers: [Usercontroller, AlbumsController],
})
export class AppModule {}
