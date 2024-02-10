import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FooterComponent } from '../../shared/footer/footer.component'
import { HeaderComponent } from '../../shared/header/header.component'

@Component({
  selector: 'shop-home-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
