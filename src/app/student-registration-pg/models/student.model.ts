import { Address } from './address.model';

export class Student {
  public imgSrc!: string;
  public name!: string;
  public surName!: string;
  public age!: number;
  public mail!: string;
  public phone!: number;
  public address!: Address;
  constructor() {
    this.address = new Address();
  }
  validateForm() {
    console.log(this.checkFielld(this.imgSrc) && this.checkFielld(this.name));
    return this.checkFielld(this.imgSrc) && this.checkFielld(this.name);
  }
  checkFielld(field: any) {
    return field && field.length > 0;
  }
}
