import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UserService],
})
export class AppModule {}
