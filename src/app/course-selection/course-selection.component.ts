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

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

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
                private _Api: MyApi) {
    this.chartOptions = {
      series: [
        {
          name: "ریاضی 1",
          data: [
            {
              x: "شنبه",
              y: [
                18,
                24
              ]
            },
            {
              x: "یک شنبه",
              y: [
                
              ]
            },
            {
              x: "دو شنبه",
              y: [
                18,
                24
              ]
            },
            {
              x: "سه شنبه",
              y: [
                
              ]
            },
            {
              x: "چهار شنبه",
              y: [
                18,
                24
              ]
            }
          ]
        },
        {
          name: "برنامه نویسی پیشرفته",
          data: [
            {
              x: "شنبه",
              y: []
            },
            {
              x: "یک شنبه",
              y: [
                13,
                15
              ]
            },
            {
              x: "دو شنبه",
              y: [
              ]
            },
            {
              x: "سه شنبه",
              y: [
                13,
                15
              ]
            }
          ]
        },
        {
          name: "ریاضی 2",
          data: [
            {
              x: "شنبه",
              y: [
                15,
                17
              ]
            },
            {
              x: "یک شنبه",
              y: [
              ]
            },
            {
              x: "دو شنبه",
              y: [
                15,
                17
              ]
            },
            {
              x: "سه شنبه",
              y: [
              ]
            },
            {
              x: "چهار شنبه",
              y: [
              ]
            },
          ]
        },
        {
          name: "ریاضی 3",
          data: [
            {
              x: "شنبه",
              y: [
                15.5,
                17
              ]
            },
            {
              x: "یک شنبه",
              y: [
              ]
            },
            {
              x: "دو شنبه",
              y: [
                15.5,
                17
              ]
            },
            {
              x: "سه شنبه",
              y: [
              ]
            },
            {
              x: "چهار شنبه",
              y: [
              ]
            },
          ]
        }
      ],
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
    this.postTimeTable();
  }

  getTimeTable(){
    this._Api.getTimeTable().subscribe(
      response=>{
        if(response){
          console.log(response);
        }
      }
    );
  }
  postTimeTable(){
    let item = [
      {
        name: "ریاضی 1",
        data: [
          {
            x: "شنبه",
            y: [
              18,
              24
            ]
          },
          {
            x: "یک شنبه",
            y: [
              
            ]
          },
          {
            x: "دو شنبه",
            y: [
              18,
              24
            ]
          },
          {
            x: "سه شنبه",
            y: [
              
            ]
          },
          {
            x: "چهار شنبه",
            y: [
              18,
              24
            ]
          }
        ]
      },
      {
        name: "برنامه نویسی پیشرفته",
        data: [
          {
            x: "شنبه",
            y: []
          },
          {
            x: "یک شنبه",
            y: [
              13,
              15
            ]
          },
          {
            x: "دو شنبه",
            y: [
            ]
          },
          {
            x: "سه شنبه",
            y: [
              13,
              15
            ]
          }
        ]
      },
      {
        name: "ریاضی 2",
        data: [
          {
            x: "شنبه",
            y: [
              15,
              17
            ]
          },
          {
            x: "یک شنبه",
            y: [
            ]
          },
          {
            x: "دو شنبه",
            y: [
              15,
              17
            ]
          },
          {
            x: "سه شنبه",
            y: [
            ]
          },
          {
            x: "چهار شنبه",
            y: [
            ]
          },
        ]
      },
      {
        name: "ریاضی 3",
        data: [
          {
            x: "شنبه",
            y: [
              15.5,
              17
            ]
          },
          {
            x: "یک شنبه",
            y: [
            ]
          },
          {
            x: "دو شنبه",
            y: [
              15.5,
              17
            ]
          },
          {
            x: "سه شنبه",
            y: [
            ]
          },
          {
            x: "چهار شنبه",
            y: [
            ]
          },
        ]
      }
    ];

    this._Api.postTimeTable(item).subscribe(
      response=>{
        if(response){
          console.log(response);
        }
      }
    )
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
          console.log(item);
          
        }
      });
    }
    
  }

  
  


  todo = [
    'ریاضی 2 - رستمی',
    'ریاضی 2 - کیانی',
    'ریاضی 2 - سعیدی مدنی',
    'ریاضی 2 - نجفی',

  ];

  done = [
    'برنامه نویسی پیشرفته - غیبی',
    'برنامه نویسی پیشرفته - شیری',
    'برنامه نویسی پیشرفته - زارع',
    'ساختمان داده - عسگری پور',
    'ساختمان داده - اکبری'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
