import { Component, OnInit } from '@angular/core';
import { Charts,Chart,CourseTrack,Course } from '../shared/chart';
import { CoursesTrack } from '../shared/courses';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {SelectType} from '../shared/select';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  panelOpenState = false;
  charts: Chart[] = Charts;

  displayedColumns = ['study', 'university', 'owner', 'used','date','more'];

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  userCourses: CourseTrack[] = CoursesTrack;
  
  
  statusSelectedValue: string = "0";
  showingStatus: SelectType[] = [
    {value: '0', viewValue: 'همه'},
    {value: '1', viewValue: 'پاس شده'},
    {value: '2', viewValue: 'پاش نشده'}
  ];
  constructor() { }

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userCourses, event.previousIndex, event.currentIndex);
  }
}


