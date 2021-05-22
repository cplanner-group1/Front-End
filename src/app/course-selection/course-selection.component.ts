import { Component, OnInit } from '@angular/core';
import { TermCourse,Semester } from '../shared/courseSelecton';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.scss']
})
export class CourseSelectionComponent implements OnInit {

  isLinear = false;
 
  mySemester = Semester;

  constructor() {}

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
