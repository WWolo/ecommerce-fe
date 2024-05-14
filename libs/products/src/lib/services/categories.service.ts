import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  apiUrl = environment.apiURL + 'categories';
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategory(categoryId: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/${categoryId}`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  updateCategory(category: Category, categoryId: string): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${categoryId}`, category);
  }

  deleteCategory(categoryId: string): Observable<object> {
    return this.http.delete(`${this.apiUrl}/${categoryId}`);
  }
}
