import { Component, OnInit } from '@angular/core';
import { Charts,Chart,CourseTrack,Course } from '../shared/chart';
import { CoursesTrack } from '../shared/courses';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SelectType} from '../shared/select';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  panelOpenState = false;
  charts: Chart[] = Charts;

  userCourses: CourseTrack[] = CoursesTrack;
  statusSelectedValue: string = "0";
  showingStatus: SelectType[] = [
    {value: '0', viewValue: 'همه'},
    {value: '1', viewValue: 'پاس شده'},
    {value: '2', viewValue: 'پاش نشده'}
  ];


  constructor(public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {

  }

  courseDetails(course:CourseTrack){
    const dialogRef = this.dialog.open(CourseDetailsComponent, {
      width: '1000px',
      data: course
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //console.log(result);
        // oversell
        
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userCourses, event.previousIndex, event.currentIndex);
  }

  itemStatusChange(event,course){
    console.log(event);
    if(event===true){
      course.status = 1;
    }
    if(event===false){
      course.status = 2;
    }
  }
}


