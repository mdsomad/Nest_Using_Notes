import { Module } from '@nestjs/common';
import { Usercontroller } from './user.controller';
import { UsersStore } from './store/users.store';
import { Store } from './store/store';

@Module({
  controllers: [Usercontroller],
  providers: [UsersStore, { provide: Store, useExisting: UsersStore }],

  // providers: [{ provide: UsersStore, useClass: Store }], //* 👈 injection token ka naam Ager class hai Aur Other class hai to is tarike se likh sakte hain

  // providers: [{ provide: UsersStore, useClass: UsersStore }],
  // providers: [UsersStore], //* 👈 injection token ka naam aur class ka naam Agar same hai to is tarike se likh sakte hain
  // providers: [{ provide: 'STORE', useClass: UsersStore }], //* 👈 injection token ka naam aur class ka naam Agar different hai to is tarike se likh sakte hain
})
export class AppModule {}
