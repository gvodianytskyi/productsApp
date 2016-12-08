
export class Product {
  constructor(
    public id: number,
    public name: string,
    public country: string,
    public price: number,
    public overdue: boolean,
    public received?: Date,
    public expiry?: number
  ) {
    this.id = null;
  }
}
