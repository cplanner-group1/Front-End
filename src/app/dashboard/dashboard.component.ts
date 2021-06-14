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
    this.getDashboardInfo();
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


  taskCount: number = 0; 
  statusCount: number[] = [0,0,0];
  statusPercentage: number[] = [0,0,0];
  remainingTask: number = 0;


  passedUnit: number = 0;
  priorityCount: number[] = [0,0,0];
  priorityPercentage: number[] = [0,0,0];

  

  getDashboardInfo(){
    this.getUserInfo();

    this._Api.getDashboard().subscribe(
      result=>{
        if(result){
          this.taskCount = result.task_count;
          this.statusCount = [result.status1,result.status2,result.status3];
          this.statusPercentage = [result.s1,result.s2,result.s3];

          
          this.passedUnit = result.passed;
          this.remainingTask = result.remaining;
          this.priorityCount = [result.priority1,result.priority2,result.priority3];
          this.priorityPercentage = [result.p1,result.p2,result.p3];
        }
        console.log(result);
      }
    );

  }
}
