import { Controller, Inject } from '@nestjs/common';

@Controller('/users') //* <-- Iska naam hai decorator             //* <-- Iska naam hai decorator
export class Usercontroller {
  // constructor(@Inject('DATABASE_NAME') private dbname: string) {
  //   console.log(dbname);
  // }
  // constructor(@Inject('MAIL') private emails: string[]) {
  //   console.log(emails);
  // }
  constructor(@Inject('ENV_CONFIS') private config: Record<string, any>) {
    console.log(config);
  }
}
