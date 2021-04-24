import { Routes } from '@angular/router';

// components
import { DashboardComponent } from '../dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];