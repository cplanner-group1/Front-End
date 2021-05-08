// routes module:
import { RouterModule, Routes } from '@angular/router';

// components:
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TaskManagerComponent } from '../task-manager/task-manager.component';
import { ChartsComponent } from '../charts/charts.component';
import { SigninSignupComponent } from '../signin-signup/signin-signup.component';
import { PanelComponent } from '../panel/panel.component';

// routes list:
export const routes: Routes = [

  /*
  // panel routes goes here:
  {
    path: '',
    component: PanelComponent,
    children:[
      { path: 'dashboard',  component: DashboardComponent },
      { path: 'charts',  component: ChartsComponent },
      { path: 'task',  component: TaskManagerComponent },
      { path: '', redirectTo: '/dashboard', component: DashboardComponent, pathMatch: 'full'},
    ]
  },

  // no layout:
  { path: 'admin', component: SigninSignupComponent},
  { path: '', redirectTo: '/admin', pathMatch: 'full' }
  */

  { path: 'dashboard',  component: DashboardComponent },
  { path: 'charts',  component: ChartsComponent },
  { path: 'task',  component: TaskManagerComponent },
  { path: 'admin', component: SigninSignupComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

/*
const appRoutes: Routes = [
    
    //Site routes goes here 
    { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
          { path: 'about', component: AboutComponent },
          { path: 'test/:id', component: AboutComponent }
        ]
    },
    
    // App routes goes here here
    { 
        path: '',
        component: AppLayoutComponent, 
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'profile', component: ProfileComponent }
        ]
    },

    //no layout routes
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);




*/


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


  export const routing = RouterModule.forRoot(routes);
