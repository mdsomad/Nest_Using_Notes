import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [UsersModule, JobsModule],
})
export class AppModule {}
