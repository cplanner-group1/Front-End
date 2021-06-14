import { Component, OnInit } from '@angular/core';
import { Chart,CourseTrack,Course } from '../shared/chart';
import { CoursesTrack } from '../shared/courses';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SelectType, SelectTypeNumberValue} from '../shared/select';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';
import { ChartDetailsComponent } from '../chart-details/chart-details.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MyApi } from '../services/user.services';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  panelOpenState = false;
  charts: Chart[] = [];

  userCourses: CourseTrack[] = [];
  statusSelectedValue: string = "0";
  showingStatus: SelectType[] = [
    {value: '0', viewValue: 'همه'},
    {value: '1', viewValue: 'پاس شده'},
    {value: '2', viewValue: 'پاش نشده'}
  ];

  statusType: SelectTypeNumberValue[] = [
    {value:0,viewValue:'پاس نشده'},
    {value:1,viewValue:'پاس شده'},
  ];

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _Api: MyApi,) { 
    
  }

  ngOnInit(): void {
    this.getUniversityInfo();
    this.getCourses();
    //this.getCharts();
  }

  getCharts(university,subject){
    this._Api.searchChart(university,subject).subscribe(
      result=>{
        //console.log(result);
        if(result){
          for(let chart of result.data){
            let new_chart:Chart = {
                id: chart.id ,
                title:  chart.title,
                owner: chart.owner,
                
                used: chart.used,
        
                study: chart.study,
                university:chart.university,
        
                date: chart.date,
                courses: chart.courses
            }
            this.charts.push(new_chart);
          }
        }
      }
    );
  }
  
  getCourses(){
    this._Api.getChart().subscribe(
      response=>{
        if(response){
          console.log(response);
          for(let item of response.data){
            let course: CourseTrack={
              course:
              {
                  id: item.id,
                  title: item.title,
                  suggestedPrerequisites: [] 
              },
              prerequisites: [],
              status: item.status, 
              grade: item.grade,
              label: item.label+'',
              description: item.description,
              unit: item.unit,
              checkList:false
            };
            this.userCourses.push(course);
            //this.firstTasks.push(task2);
          }
        }
    });
  }

  chartsDetails(chart:Chart){
    const dialogRef = this.dialog.open(ChartDetailsComponent, {
      width: '600px',
      data: chart
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //console.log(result);        
      }
    });
  }

  // view more about course:
  courseDetails(course:CourseTrack){
    const dialogRef = this.dialog.open(CourseDetailsComponent, {
      width: '1000px',
      data: course
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //console.log(result);        
      }
    });
  }

  // drag and drop method:
  drop(event: CdkDragDrop<string[]>) {
    let data = 
    {
      id:   this.userCourses[event.previousIndex].course.id,
      old:  event.previousIndex,
      new:  event.currentIndex
    }
    if(data.old!==data.new){
      this._Api.dragChart(data).subscribe(
        response=>{
          if(response){
            console.log(response);
            //this.openSnackBar(response); 
          }
        }
      );
      moveItemInArray(this.userCourses, event.previousIndex, event.currentIndex);
  
    }
    //moveItemInArray(this.userCourses, event.previousIndex, event.currentIndex);
  }


  /*itemStatusChange(event,course){
    //console.log(event);
    if(event===true){
      course.status = 1;
    }
    if(event===false){
      course.status = 2;
    }
  }*/

  
  addCourse(){ // add row
    this._Api.addChart().subscribe(
      response=>{
        if(response){
          console.log(response);
          let new_course: CourseTrack = {
            course:
            {
                id: response.id,
                title: '',
                suggestedPrerequisites: [] 
            },
            prerequisites: [],
            status: 0, 
            grade: 0,
            label: '0',
            description: '',
            unit: 3,
            checkList:false
          }
          //new_task.id = response.id;
          this.userCourses.push(new_course);
          this.openSnackBar("درس جدید اضافه شد."); 
        }
      }
    )
  } 

  editCharts(){
    //SNACKBAR
    //this.openSnackBar(); 

    //API
    let item = {data:this.userCourses}
      this._Api.editChart(item).subscribe(
        response=>{
          //console.log(response);
          this.openSnackBar(response); 
    });
    
  }


  editView:boolean =  false;
  enableEdit(){
    if(this.editView===false){
      this.editView = true;
    }else{
      this.editView = false;
    }
  }
  //check list column:
  isAllSelected(): boolean {
    for(let item of this.userCourses){
      if(item.checkList===false){
        return false;
      }
    }
    return true;
  }
  isAllNotSelected(): boolean {
    for(let item of this.userCourses){
      if(item.checkList===true){
        return false;
      }
    }
    return true;
  }
  masterToggleValue: boolean = false;
  masterToggleIndeterminate: boolean = false;
  masterToggle(e) {
    //console.log(e);
    if(e===true){
      let index = 0;
      for(let item of this.userCourses){
        this.userCourses[index].checkList = true;
        index++;
      }
    }
    if(e===false){
      let index = 0;
      for(let item of this.userCourses){
        this.userCourses[index].checkList = false;
        index++;
      }
    }
  }
  checkboxLabel(e,row) {
    //this.checkList[row]= e.checked;
    if(this.isAllSelected()){
      this.masterToggleValue = true;
      this.masterToggleIndeterminate = false;
    }
    else if(this.isAllNotSelected()){
      this.masterToggleValue = false;
      this.masterToggleIndeterminate = false;
    }
    else{
      this.masterToggleValue = false;
      this.masterToggleIndeterminate = true;
    }

  }

  // delete course of list:
  deleteRow(i){// i --> taskRow
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      minWidth: '400',
      maxWidth: '90%',
      data: { 
        title: "اخطار",
        message: "آیا نسبت به حذف تسک مورد نظر مطمئن هستید؟"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        if(i!==-1){
          let deleteItems: number[] = []
          if(this.userCourses[i].course.id!=-1){
            deleteItems.push(this.userCourses[i].course.id);
          }
          this.userCourses.splice(i,1);
          this.deleteCourse(deleteItems);

        }
      }
    });
    
    
  }
  deleteSelectedRow(){
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      minWidth: '400',
      maxWidth: '90%',
      data: { 
        title: "اخطار",
        message: "آیا نسبت به حذف موارد انتخاب شده مطمئن هستید؟"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        let n = this.userCourses.length;
        let deleteItems: number[] = [];
        for(let i = n-1 ; i >= 0 ; i--){
          if(this.userCourses[i].checkList===true){
            if(this.userCourses[i].course.id!=-1){
              deleteItems.push(this.userCourses[i].course.id);
            }
            this.userCourses.splice(i,1);

          }
        }
        this.masterToggleValue = false;
        this.masterToggleIndeterminate = false;
        this.deleteCourse(deleteItems);
      }
    });
    
  }
  deleteCourse(deleteItems:number[]){
    let deletObject = { "deleted":deleteItems };
    this._Api.deleteChart(deletObject).subscribe(
      response=>{
        if(response){
          //console.log(response);
          this.openSnackBar(response); 
        }
      }
    );
  }

  //SNACKBAR FOR 'SAVE' BUTTON
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  message: string = '✔️  ذخیره شد.';

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data:{message:message},
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['alert-snackbar-success']
    });
  }

  //POST CHARTS
  //ASHKAN API RO NNVSHTM, FQT BARA SNACKBAR GFTM YE JA BASHE VQTI CLICK MKNE
  //BQYE CODETO OONJA K ZDM API BNVIS


  // changed to editcharts
  /*postCharts() {
    
    //SNACKBAR
    this.openSnackBar(); 

    //API

  }*/


  //FOR UNIVERSITY NAME AND SUBJECT 
  universityName: string = '';
  universitySubject: string = '';
  name: string = '';
  surname: string = '';
  
  entryYear: number;
  units: number;
  overallAverage: number;
  termAverage: number;

  getUniversityInfo(){
    this._Api.getSettings().subscribe(
      response=>{
        if(response){
          this.universityName = response.university;
          this.universitySubject = response.field;

          this.name = response.first_name;
          this.surname = response.last_name;

          this.entryYear = response.entry_year;
          this.units = response.total_units;
          this.overallAverage = response.total_gpa;
          this.termAverage = response.last_semester_gpa;
        }
    });
  }

  postUniversityInfo() {
    //SNACKBAR 
    this.openSnackBar(this.message);
  
    //API
      let item: any = {
        university: this.universityName,
        field: this.universitySubject,
        first_name: this.name,
        last_name: this.surname,
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



