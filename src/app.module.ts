import { Module } from '@nestjs/common';
import { Usercontroller } from './user.controller';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

const IS_DEV_MODE = true;
@Module({
  controllers: [Usercontroller],
  providers: [
    {
      provide: 'EVENT_STORE',
      useFactory: (limit: number = 4) => {
        const eventBus$ = IS_DEV_MODE
          ? new ReplaySubject(2)
          : new BehaviorSubject(null);
        console.log(limit);
        return eventBus$;
      },
      // inject: ['LIMIT'],
      inject: [{ token: 'LIMIT', optional: true }],
    },
    // {
    //   provide: 'LIMIT',
    //   useValue: 10,
    // },
  ],
})
export class AppModule {}
