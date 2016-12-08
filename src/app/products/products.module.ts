import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductListComponent} from "./product-list";
import {ProductComponent} from "./product";

import {ProductsService} from "./services/products.service";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductsModule { }
