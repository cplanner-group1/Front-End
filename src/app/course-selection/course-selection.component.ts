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
                8,
                10
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
                8,
                10
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
                8,
                10
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

  /*
     this.chartOptions = {
      series: [
        {
          name: "ریاضی 1",
          data: [
            {
              x: "شنبه",
              y: [
                8,
                10
              ]
            },
            {
              x: "یک شنبه",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-05").getTime()
              ]
            },
            {
              x: "یک شنبه",
              y: [
                new Date("2019-03-05").getTime(),
                new Date("2019-03-07").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-03").getTime(),
                new Date("2019-03-09").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-11").getTime()
              ]
            },
            {
              x: "Validation",
              y: [
                new Date("2019-03-11").getTime(),
                new Date("2019-03-16").getTime()
              ]
            },
            {
              x: "Design",
              y: [
                new Date("2019-03-01").getTime(),
                new Date("2019-03-03").getTime()
              ]
            }
          ]
        },
        {
          name: "برنامه نویسی پیشرفته",
          data: [
            {
              x: "Design",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-05").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-06").getTime(),
                new Date("2019-03-16").getTime()
              ]
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-03").getTime(),
                new Date("2019-03-07").getTime()
              ]
            },
            {
              x: "Deployment",
              y: [
                new Date("2019-03-20").getTime(),
                new Date("2019-03-22").getTime()
              ]
            },
            {
              x: "Design",
              y: [
                new Date("2019-03-10").getTime(),
                new Date("2019-03-16").getTime()
              ]
            }
          ]
        },
        {
          name: "ریاضی 2",
          data: [
            {
              x: "Code",
              y: [
                new Date("2019-03-10").getTime(),
                new Date("2019-03-17").getTime()
              ]
            },
            {
              x: "Validation",
              y: [
                new Date("2019-03-05").getTime(),
                new Date("2019-03-09").getTime()
              ]
            }
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
    */
  }

  ngOnInit() {
    
  }

  addCourse(){
    
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
