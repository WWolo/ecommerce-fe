import { HttpClient } from '@angular/common/http'
import { Component, OnInit, inject } from '@angular/core'
import { CategoriesService, Category } from '@org/products'
import { CORE_IMPORTS, PRIME_UI } from '@org/ui'

@Component({
  selector: 'admin-categories-list',
  standalone: true,
  imports: [...PRIME_UI, ...CORE_IMPORTS],
  providers: [CategoriesService, HttpClient],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss',
})
export class CategoriesListComponent implements OnInit {
  categoryService = inject(CategoriesService)
  categories: Category[] = []

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res
    })
  }
}
