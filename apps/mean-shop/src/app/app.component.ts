import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ProductListComponent } from './pages/product-list/product-list.component'
import { FooterComponent } from './shared/footer/footer.component'
import { HeaderComponent } from './shared/header/header.component'

@Component({
  standalone: true,
  selector: 'shop-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    HomePageComponent,
    ProductListComponent,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    FormsModule,
  ],
})
export class AppComponent {
  title = 'mean-shop'
}
