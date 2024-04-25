import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'lib-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {}
