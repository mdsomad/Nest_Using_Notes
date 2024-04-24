import { Module } from '@nestjs/common';
import { JobsController } from './controllers/Jobs.controller';
import { JobsService } from './services/jobs.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule], //* <-- Shared Module
  controllers: [JobsController],
  providers: [JobsService],
  exports: [JobsService],
})
export class JobsModule {}
