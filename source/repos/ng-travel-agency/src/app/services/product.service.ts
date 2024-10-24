import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Asegúrate que esté configurado con providedIn: 'root'
})
export class ProductService {
  private productsSignal = signal<Product[]>([]);
  private apiUrl = 'https://api.jsonbin.io/v3/b/671a6653acd3cb34a89c5908'; // URL de la API
  private apiKey = '$2a$10$cVNQj2Z20kHkc7tjapHTpeTJPbRZbz/5PLoKwMDkLwrMw51t7mqqy'; // API Key
  private headers = {
    'X-Access-Key': this.apiKey,
    'Content-Type': 'application/json',
  };
  constructor(private http: HttpClient) {} // Verifica que HttpClient esté inyectado correctamente

  loadProducts() {
    this.http.get(this.apiUrl, { headers: this.headers }).subscribe((data: any) => {
      this.productsSignal.set(data.record.circuits);
      console.log(data.record.circuits)
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
  duration: string;
  highlights: string[];
}