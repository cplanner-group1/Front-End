import { Component, OnInit } from '@angular/core';
import { Charts,Chart,CourseTrack,Course } from '../shared/chart';
import { CoursesTrack } from '../shared/courses';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SelectType, SelectTypeNumberValue} from '../shared/select';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';

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

  statusType: SelectTypeNumberValue[] = [
    {value:0,viewValue:'پاس نشده'},
    {value:1,viewValue:'پاس شده'},
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

  
  addCourse(){ // add row
    let new_item: CourseTrack = {
      course:
      {
          id: -1,
          title: '',
          suggestedPrerequisites: [] 
      },
      prerequisites: [],
      status: 0, 
      grade: null,
      label: '0',
      description: '',
      unit: 3,
      checkList:false
    }
    this.userCourses.unshift(new_item);

    //this.checkList.push(false);
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
          this.userCourses.splice(i,1);
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
        for(let i = n-1 ; i >= 0 ; i--){
          if(this.userCourses[i].checkList===true){
            this.userCourses.splice(i,1);

          }
        }
        this.masterToggleValue = false;
        this.masterToggleIndeterminate = false;
      }
    });
    
  }
}



