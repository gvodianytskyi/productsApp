import { Component, OnInit } from '@angular/core';

import {Product} from "./products/product.model";

import { ProductsService } from './products/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  product: Product;
  products: Array<Product>;

  constructor(
    public productsService: ProductsService
  ) {}

  ngOnInit():void {
    this.product = this.productsService.getProduct();
    this.products = this.productsService.getProducts();
  }
}
