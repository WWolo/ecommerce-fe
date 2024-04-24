import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  isSubmitted = signal(false);
  private readonly fb = inject(FormBuilder);
  private readonly messageService = inject(MessageService);
  private readonly categoryService = inject(CategoriesService);

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      icon: ['', Validators.required],
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
    };

    this.categoryService.createCategory(category).subscribe({
      complete: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Category was successfully created',
        });
      },
      error: () => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong!' }),
    });
  }
}
