import { Component, OnInit, inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CORE_IMPORTS, PRIME_UI } from '@org/ui'

@Component({
  selector: 'admin-categories-form',
  standalone: true,
  imports: [...CORE_IMPORTS, ...PRIME_UI],
  templateUrl: './categories-form.component.html',
  styleUrl: './categories-form.component.scss',
})
export class CategoriesFormComponent implements OnInit {
  fb = inject(FormBuilder)
  isSubmitted = false
  form!: FormGroup

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      icon: [''],
    })
  }

  onSubmit() {
    this.isSubmitted = true
    console.log('this.form.getRawValue() :>> ', this.form.getRawValue())
  }
}
