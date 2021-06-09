import { Component, OnInit } from '@angular/core';
import { MyApi } from '../services/user.services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _Api: MyApi,) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  allUnits: number = 0;
  overallAverage: number = 0;
  lastTermsAverage: number = 0;

  getUserInfo(){

    this._Api.getSettings().subscribe(
      response=>{
        if(response){
          this.allUnits = response.total_units;
          this.overallAverage = response.total_gpa;
          this.lastTermsAverage = response.last_semester_gpa;
        }
    });

    
  }
}
