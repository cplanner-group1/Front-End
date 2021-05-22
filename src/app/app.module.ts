import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


// Module:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TextFieldModule } from '@angular/cdk/text-field';

import { DragDropModule } from '@angular/cdk/drag-drop';


// api:
import { HttpClientModule } from '@angular/common/http';
import { MyApi } from './services/user.services'

//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatInputModule } from '@angular/material/input';

//import { NgxStarRatingModule } from 'ngx-star-rating';

import 'hammerjs';

//import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// routing 
//import { AppRoutingModule } from './app-routing/app-routing.module';
import { routing } from './app-routing/routes';

//date-picker
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { ChartsComponent } from './charts/charts.component';


//Component:
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { DeleteAlertComponent } from './delete-alert/delete-alert.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { PanelComponent } from './panel/panel.component';
import { LandingComponent } from './landing/landing.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ChartDetailsComponent } from './chart-details/chart-details.component';
import { CourseSelectionComponent } from './course-selection/course-selection.component';


import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskManagerComponent,
    StarRatingComponent,
    DeleteAlertComponent,
    TaskDetailsComponent,
    ChartsComponent,
    SigninSignupComponent,
    PanelComponent,
    LandingComponent,
    CourseDetailsComponent,
    ChartDetailsComponent,
    CourseSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ///AppRoutingModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    DragDropModule,
    MatDatepickerModule,
    TextFieldModule,
    DpDatePickerModule,
    NgbModule,
    HttpClientModule,
    NgApexchartsModule,
    routing
    /*ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })*/
  ],
  providers: [MyApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
