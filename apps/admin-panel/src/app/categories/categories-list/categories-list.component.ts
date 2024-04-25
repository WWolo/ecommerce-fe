import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CategoriesService, Category } from '@org/products';
import { CORE_IMPORTS, PRIME_UI } from '@org/ui';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'admin-categories-list',
  standalone: true,
  imports: [...PRIME_UI, ...CORE_IMPORTS],
  providers: [
    CategoriesService,
    HttpClient,
    MessageService,
    ConfirmationService,
  ],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss',
})
export class CategoriesListComponent {
  private readonly messageService = inject(MessageService);
  private readonly categoryService = inject(CategoriesService);
  private readonly confirmationService = inject(ConfirmationService);

  categories$: Observable<Category[]> = this.categoryService.getCategories();

  confirmDelete(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure you want delate this category?',
      header: 'Delete Category',
      icon: 'pi pi-exclamation-triangles',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => this.deleteCategory(id),
      key: 'confirmDialog',
    });
  }

  deleteCategory(id: string): void {
    this.categoryService
      .deleteCategory(id)
      .pipe(
        tap({
          complete: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Category was successfully deleted',
            });
          },
          error: () =>
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Something went wrong!',
            }),
        }),
        switchMap(() => this.categoryService.getCategories())
      )
      .subscribe(categories => (this.categories$ = of(categories)));
  }

  editCategory(id: string) {
    return;
  }
}
