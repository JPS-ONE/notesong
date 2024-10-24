import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, ProductCardComponent],
})
export class ProductListComponent implements OnInit {
  productsSignal = this.productService.getProductsSignal();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.loadProducts();
  }
}

