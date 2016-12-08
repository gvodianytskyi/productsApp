import { Injectable } from '@angular/core';

import { Product } from './../product.model';

@Injectable()
export class ProductsService {

  constructor() { }

  getProduct(): Product {
    return new Product(1, 'Mango', 'Equador', 40, false);
  }

  getProducts(): Array<Product> {
    return [
      new Product(1, 'Banana', 'Ecuador', 25, false),
      new Product(2, 'Apple', 'Poland', 10.50, true),
      new Product(3, 'Watermelon', 'Ukraine', 4.75, false)
    ];
  }

}
