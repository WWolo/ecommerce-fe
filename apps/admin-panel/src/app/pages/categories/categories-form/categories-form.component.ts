import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService, Category } from '@org/products';
import { CORE_IMPORTS, PRIME_UI } from '@org/ui';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'admin-categories-form',
  standalone: true,
  imports: [...CORE_IMPORTS, ...PRIME_UI],
  providers: [CategoriesService, MessageService],
  templateUrl: './categories-form.component.html',
  styleUrl: './categories-form.component.scss',
})
export class CategoriesFormComponent implements OnInit {
  form!: FormGroup;
  categoryId: string | undefined;
  isSubmitted = signal(false);
  editMode = signal(false);

  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly messageService = inject(MessageService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly categoryService = inject(CategoriesService);

  ngOnInit() {
    this.checkEditMode();
    this.form = this.fb.group({
      name: ['', Validators.required],
      icon: ['', Validators.required],
      color: ['#fff', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitted.set(true);
    if (this.form.invalid) {
      return;
    }

    const category: Omit<Category, 'id'> = {
      name: this.form.controls['name'].value,
      icon: this.form.controls['icon'].value,
      color: this.form.controls['color'].value,
    };

    if (this.editMode()) {
      this.updateCategory(category);
    } else {
      this.createCategory(category);
    }
  }

  cancel() {
    const url = this.editMode() ? '../..' : '../';
    this.router.navigate([url], { relativeTo: this.activatedRoute });
  }

  private createCategory(category: Category) {
    this.categoryService.createCategory(category).subscribe({
      complete: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Category was successfully created',
        });

        this.cancel();
      },
      error: () =>
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong!',
        }),
    });
  }

  private updateCategory(category: Category) {
    if (!this.categoryId) return;
    this.categoryService.updateCategory(category, this.categoryId).subscribe({
      complete: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Category was successfully updated',
        });

        this.cancel();
      },
      error: () =>
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong!',
        }),
    });
  }

  private checkEditMode(): void {
    if (this.activatedRoute.snapshot.params['id']) {
      this.categoryId = this.activatedRoute.snapshot.params['id'];
      this.editMode.set(true);

      this.categoryService.getCategory(this.categoryId!).subscribe(category => {
        this.form.patchValue({ ...category });
      });
    }
  }
}
