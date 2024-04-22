import { Module } from '@nestjs/common';
import { Usercontroller } from './user.controller';

@Module({
  controllers: [Usercontroller],
  providers: [
    { provide: 'DATABASE_NAME', useValue: 'MOON_KNIGHT' },
    { provide: 'MAIL', useValue: ['mdsomad@gmail.com'] },
    {
      provide: 'ENV_CONFIS',
      useValue: {
        type: 'DEV',
        node: '17',
      },
    },
  ],
})
export class AppModule {}
