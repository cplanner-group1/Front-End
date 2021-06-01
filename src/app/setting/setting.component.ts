import { Component, OnInit } from '@angular/core';
import { MyApi } from '../services/user.services';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  //INFO
  /*
  username: string = '';
  email: string = '';
  password: string = '';
  */

  name: string = '';
  surname: string = '';

  universityName: string = '';
  universitySubject: string = ''

  entryYear: number;
  units: number;
  overallAverage: number;
  termAverage: number;

  ngOnInit(): void {
    this.getSettings();
  }

  constructor(
    private _Api: MyApi,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,) { }
  
  getSettings(){
    this._Api.getSettings().subscribe(
      response=>{
        if(response){
          console.log(response);
          this.name = response.first_name;
          this.surname = response.last_name;

          this.universityName = response.university;
          this.universitySubject = response.field;

          this.entryYear = response.entry_year;
          this.units = response.total_units;
          this.overallAverage = response.total_gpa;
          this.termAverage = response.last_semester_gpa;
          

        }
    });
  }

  //FOR SNACKBAR
  durationInSeconds = 5;
  //start, end, center, left,right
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  //top,bottom
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  message: string = '✔️  ذخیره شد.';

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data:{message:this.message},
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['alert-snackbar-success']
    });
  }


  postSettings() {
    
  //SNACKBAR 
  this.openSnackBar();

  //API
    let item: any = {
      first_name: this.name,
      last_name: this.surname,
      university: this.universityName,
      field: this.universitySubject,
      entry_year: this.entryYear,
      total_gpa: this.overallAverage,
      last_semester_gpa: this.termAverage,
      total_units: this.units,
    };
    this._Api.addSettings(item).subscribe(
      response=>{
        if(response){
          console.log(response);
        }
      }
    )
  }


}
