import { Module } from '@nestjs/common';
import { Usercontroller } from './user.controller';
import { UserStore } from './users.store';
import { AlbumsController } from './albums.contraller';

@Module({
  controllers: [Usercontroller, AlbumsController],
  providers: [UserStore],
})
export class AppModule {}
