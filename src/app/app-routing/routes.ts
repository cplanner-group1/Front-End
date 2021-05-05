// routes module:
import { Routes } from '@angular/router';

// components:
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TaskManagerComponent } from '../task-manager/task-manager.component';
import { ChartsComponent } from '../charts/charts.component';
import { SigninSignupComponent } from '../signin-signup/signin-signup.component';

// routes list:
export const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'charts',  component: ChartsComponent },
  { path: 'task',  component: TaskManagerComponent },
  { path: 'admin', component: SigninSignupComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
/*
{
    path: 'first-component',
    component: FirstComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ],
  },*/