import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Product, ProductsService } from '@org/products';
import { CORE_IMPORTS, PRIME_UI } from '@org/ui';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-products-list',
  standalone: true,
  imports: [...PRIME_UI, ...CORE_IMPORTS],
  providers: [ProductsService, HttpClient, MessageService, ConfirmationService],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  private readonly productService = inject(ProductsService);

  products$: Observable<Product[]> = this.productService.getProducts();
}
