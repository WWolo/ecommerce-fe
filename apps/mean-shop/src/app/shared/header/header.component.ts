import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'shop-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
