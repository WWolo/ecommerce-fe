import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'shop-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {}
