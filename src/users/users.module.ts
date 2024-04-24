import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { AccountsController } from './controllers/accounts.controller';
import { UserService } from './services/users.service';

@Module({
  imports: [],
  controllers: [UsersController, AccountsController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
