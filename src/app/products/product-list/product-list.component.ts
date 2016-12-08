import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Product} from "../product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input products: Array<Product>;
  @Output() overdue: EventEmitter<Product>;

  constructor() {
    this.overdue = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

}
