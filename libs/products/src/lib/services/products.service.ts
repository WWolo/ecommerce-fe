import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl = environment.apiURL + 'products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // getCategory(categoryId: string): Observable<Category[]> {
  //   return this.http.get<Category[]>(`${this.apiUrl}/${categoryId}`);
  // }

  // createCategory(category: Category): Observable<Category> {
  //   return this.http.post<Category>(this.apiUrl, category);
  // }

  // updateCategory(category: Category, categoryId: string): Observable<Category> {
  //   return this.http.put<Category>(`${this.apiUrl}/${categoryId}`, category);
  // }

  // deleteCategory(categoryId: string): Observable<object> {
  //   return this.http.delete(`${this.apiUrl}/${categoryId}`);
  // }
}
