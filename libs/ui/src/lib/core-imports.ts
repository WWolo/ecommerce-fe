import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

export const CORE_IMPORTS = [
  HttpClientModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  LucideAngularModule,
  AsyncPipe,
];
