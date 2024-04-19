import { Component } from '@angular/core'
import { CORE_IMPORTS } from '@org/ui'

@Component({
  selector: 'admin-sidebar',
  standalone: true,
  imports: [...CORE_IMPORTS],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
