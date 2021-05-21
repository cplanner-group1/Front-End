import { Component, OnInit } from '@angular/core';
import { TermCourse,Semester } from '../shared/courseSelecton';


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
}
