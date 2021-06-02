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


  constructor() {
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
    
  }

  addCourse(){
    
  }

  
  addOther(){
    
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
