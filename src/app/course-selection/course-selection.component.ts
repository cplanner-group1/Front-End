import { Component, OnInit ,ViewChild} from '@angular/core';
import { TermCourse } from '../shared/courseSelecton';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import * as moment from "moment";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";
import { MatDialog } from '@angular/material/dialog';
import { MyApi } from '../services/user.services';
import { AddCourseComponent } from '../add-course/add-course.component';
import { AddOtherComponent } from '../add-other/add-other.component';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';
import { dragTwoList } from '../shared/courseSelecton';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

export interface timetable{
  name: string;
  data: xy[];
}
export interface xy{
  x: string;
  y: number[];
}

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.scss']
})
export class CourseSelectionComponent implements OnInit {

  isLinear = false;
 
  mySemester: TermCourse[] = [];
  dataSource: Object;

  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

    constructor(public dialog: MatDialog,
                private _Api: MyApi,
                private _snackBar: MatSnackBar) {
    this.chartOptions = {
      series: this.timeTableData,
      chart: {
        height: 450,
        type: "rangeBar"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%"
        }
      },
      xaxis: {
        type: "numeric"
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      }
    };
  }

  ngOnInit() {
    this.getCourses();
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


  getCourses(){
    this._Api.getSemesterCourse().subscribe(
      response=>{
        //console.log(response);
        if(response){
          this.mySemester = [];
          for(let item of response.user_semester_course){
            let tempDate = [];
            console.log(item[0]);
            //let index = 0;
            for(let dateItem of item[0].date){
              let tempInnerDate = {
                  startTime: dateItem[0],
                  endTime: dateItem[1],
                  date: dateItem[2],
                  week: dateItem[3]
              }
              tempDate.push(tempInnerDate);
            }
            let course: TermCourse = {
              id: item[0].id,
              master: item[0].master,
              courses: item[0].courses,
              priority: item[0].priority,
              date:tempDate,
              finalExam: {
                  startTime: item[0].finalExam[0],
                  endTime: item[0].finalExam[1],
                  date: item[0].finalExam[2],
                  week: item[0].finalExam[3]
              },
              description: item[0].description,
              selected: item[0].selected,
              status: item[0].status
              
            } 
            this.mySemester.push(course);

            //console.log(this.mySemester);
            
          }
        }
      }
    );
  }

  deleteRow(i){
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      minWidth: '400',
      maxWidth: '90%',
      data: { 
        title: "اخطار",
        message: "آیا نسبت به حذف درس مورد نظر مطمئن هستید؟"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        if(i!==-1){
          let deleteItems: number[] = []
          if(this.mySemester[i].id!=-1){
            let deleteData = {'id':this.mySemester[i].id}
            this._Api.deleteSemesterCourse(deleteData).subscribe(
              response=>{
                this.openSnackBar(response);
                //console.log(response);
                this.mySemester.splice(i,1);
              }
            )

          }
          
        }
      }
    });
  }

  addCourse(){
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '1000px',
      height: '600px',
      data: {buttonText:'افزودن جدید',status:0}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //console.log(result);
        this.openSnackBar("با موفقیت اضافه شد");

        this.getCourses();
      }
    });
  }

  
  addOther(){
    const dialogRef = this.dialog.open(AddOtherComponent, {
      width: '1000px',
      height: '600px',
      data: {buttonText:'افزودن جدید',status:0}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.openSnackBar("با موفقیت اضافه شد");

        this.getCourses(); 
      }
    });
  }

  editCourseAndOther(item,addOther){
    if(addOther===0){
      const dialogRef = this.dialog.open(AddCourseComponent, {
        width: '1000px',
        height: '600px',
        data: {
                buttonText:'ذخیره تغییرات',
                course:item,
                status:1 
                  //0--> new
                  //1--> edit
              } 
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.openSnackBar("با موفقیت ویرایش شد");
          //console.log(result);
        }
      });
    }else if(addOther===1){
      const dialogRef = this.dialog.open(AddOtherComponent, {
        width: '1000px',
        height: '600px',
        data: {
                buttonText:'ذخیره تغییرات',
                course:item,
                status:1 
                  //0--> new
                  //1--> edit
              } 
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.openSnackBar("با موفقیت ویرایش شد");
          
        }
      });
    }
    
  }

  
  
  selectionChange(event){
    if(event.selectedIndex===0){
      this.getCourses();
    }else if(event.selectedIndex===1){
      this.selectionOne();
    }else{
      this.getCourses();
      this.selectionOne();
      this.selectionTwo();
    }
  }
  selectionOne(){
    this.todoList = [];
    this.doneList = [];
    for(let item of this.mySemester){
      if(item.selected===true){
        let doneTemp: dragTwoList = {
          id: item.id,
          courses: item.courses,
          master: item.master,
          date: item.date,
          priority: item.priority,
          selected: item.selected
        }
        this.doneList.push(doneTemp);
        continue;
      }
      if(item.selected===false){
        let todoTemp: dragTwoList = {
          id: item.id,
          courses: item.courses,
          master: item.master,
          date: item.date,
          priority: item.priority,
          selected: item.selected
        }
        this.todoList.push(todoTemp);
        continue;
      }
    }
  }
  selectionTwo(){
    this.timeTableList = [];
    for(let item of this.mySemester){
      if(item.selected===true){
        let doneTemp: dragTwoList = {
          id: item.id,
          courses: item.courses,
          master: item.master,
          date: item.date,
          priority: item.priority,
          selected: item.selected
        }
        this.timeTableList.push(doneTemp);
        continue;
      }
      
    }
    this.createTimeTable();
  }

  timeTableData: timetable[] = [];
  createTimeTable(){
    this.timeTableData = [];
    for(let item of this.timeTableList){
      let xyList: xy[] = [];
      for(let day of item.date){
        let startArrayString = day.startTime.split(":", 2); 
        let endArrayString = day.endTime.split(":", 2);

        let startArrayNumber: number[] = [0,0];
        let endArrayNumber: number[] = [0,0];
        let i = 0;
        for(let obj of startArrayString){
          if(i==0){
            startArrayNumber[i] = parseInt(startArrayString[i]);
            endArrayNumber[i] = parseInt(endArrayString[i]);
          }
          if(i==1){
            startArrayNumber[i] = parseInt(startArrayString[i])/60;
            endArrayNumber[i] = parseInt(endArrayString[i])/60;
          }
          i++;
        }
        let start = startArrayNumber[0]+startArrayNumber[1];
        let end = endArrayNumber[0]+endArrayNumber[1];

        let xyObject: xy = {
          x: this.getDay(day.week),
          y: [start,end]
        }
        xyList.push(xyObject);
      }
      let oneUnit:timetable = {
        name: item.courses + '|' + item.master,
        data: xyList
      };
      this.timeTableData.push(oneUnit);

      // add to time table:
      this.chartOptions.series = this.timeTableData;
    }
  }
  getDay(day: string): string{
    if(day=='0'){
      return 'شنبه';
    }else if(day=='1'){
      return 'یک شنبه';
    }else if(day=='2'){
      return 'دو شنبه';
    }else if(day=='3'){
      return 'سه شنبه';
    }else if(day=='4'){
      return 'چهار شنبه';
    }else if(day=='5'){
      return 'پنج شنبه';
    }else{
      return 'جمعه';
    }

  }

  todoList: dragTwoList[] = [];
  doneList: dragTwoList[] = [];
  timeTableList: dragTwoList[] = [];
 

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      //let item = event.previousContainer.data[event.previousIndex];
      let id = event.previousContainer.data[event.previousIndex]['id'];
      //let status = event.previousContainer.data[event.previousIndex]['status'];
      let data = {id: id};
      this._Api.dragDropSemesterCourse(data).subscribe(
        response=>{
          //console.log(response);
          this.openSnackBar(response);
          this.getCourses();
          //this.selectionOne();
        }
      );
      /*if(status===false){
        event.previousContainer.data[event.previousIndex]['status'] = true;
      }else{
        event.previousContainer.data[event.previousIndex]['status'] = false;  
      }*/
      //console.log(event.container.data);
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
