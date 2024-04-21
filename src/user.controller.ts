import { Controller, Inject, Optional } from '@nestjs/common';
import { UsersStore } from './store/users.store';

@Controller('/users') //* <-- Iska naam hai decorator             //* <-- Iska naam hai decorator
export class Usercontroller {
  constructor(private store: UsersStore) {
    console.log(this.store);
  }

  // constructor(@Inject('STORE') private store: UsersStore) {
  //   console.log(this.store);
  // }
  //   constructor(@Optional() private store: UsersStore) {
  //     console.log(this.store);
  //   }

  //   constructor(@Inject(UsersStore) private store: UsersStore) {
  //     console.log(this.store);
  //   }

  //   constructor(private store: UsersStore) {
  //     console.log(this.store);
  //   }
}
