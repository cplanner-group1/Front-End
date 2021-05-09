// routes module:
import { RouterModule, Routes } from '@angular/router';

// components:
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TaskManagerComponent } from '../task-manager/task-manager.component';
import { ChartsComponent } from '../charts/charts.component';
import { SigninSignupComponent } from '../signin-signup/signin-signup.component';
import { PanelComponent } from '../panel/panel.component';
import { LandingComponent } from '../landing/landing.component';

// routes list:
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: '',
        redirectTo:'/dashboard',
        pathMatch:'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'task',
        component: TaskManagerComponent
      },
      {
        path: 'charts',
        component: ChartsComponent
      }
    ]
  },
  {
    path: 'landing',
    component: LandingComponent
  }, 
  {
    path: 'admin',
    component: SigninSignupComponent
  }
  /*
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'charts',  component: ChartsComponent },
  { path: 'task',  component: TaskManagerComponent },
  { path: 'admin', component: SigninSignupComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }*/
];

/*

{
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'features',
        component: FeaturesComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'analytics',
        component: AnalyticsComponent
      }
    ]
}

*/

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
