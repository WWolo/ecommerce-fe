import { Component } from '@angular/core'
import { CORE_IMPORTS } from '@org/ui'
import { SidebarComponent } from '../sidebar/sidebar.component'

@Component({
  selector: 'admin-shell',
  standalone: true,
  imports: [...CORE_IMPORTS, SidebarComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {}
