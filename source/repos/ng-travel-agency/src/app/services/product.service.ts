import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Asegúrate que esté configurado con providedIn: 'root'
})
export class ProductService {
  private productsSignal = signal<Product[]>([]);

  constructor(private http: HttpClient) {} // Verifica que HttpClient esté inyectado correctamente

  loadProducts(): void {
    this.http.get<Product[]>('https://api.example.com/products').subscribe({
      next: (data) => this.productsSignal.set(data),
      error: (err) => console.error('Error loading products', err),
    });
  }

  getProductsSignal() {
    return this.productsSignal;
  }
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}