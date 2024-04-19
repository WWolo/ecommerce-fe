import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'lib-ui-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {}
