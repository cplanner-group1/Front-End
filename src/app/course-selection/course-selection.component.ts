import { Component, OnInit ,ViewChild} from '@angular/core';
import { TermCourse,Semester } from '../shared/courseSelecton';
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
 
  mySemester = Semester;
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



  addCourse(){
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '1000px',
      height: '600px',
      data: {buttonText:'افزودن جدید'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        
        
      }
    });
  }

  
  addOther(){
    const dialogRef = this.dialog.open(AddOtherComponent, {
      width: '1000px',
      height: '600px',
      data: {buttonText:'افزودن جدید'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        
      }
    });
  }

  editCourseAndOther(){
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '1000px',
      height: '600px',
      data: {buttonText:'ذخیره تغییرات'} 
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        
        
      }
    });
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
