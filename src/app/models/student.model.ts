import { Address } from './address.model';

export class Student {
  public name!: string;
  public surName!: string;
  public age!: number;
  public email!: string;
  public phone!: number;
  public address!: Address;
  constructor() {
    this.address = new Address();
  }
}
