import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseSelectionComponent } from '../course-selection/course-selection.component';
import { MyApi } from '../services/user.services';
import { TermCourse } from '../shared/courseSelecton';
import { SelectType, SelectTypeNumberValue } from '../shared/select';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CourseSelectionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _snackBar: MatSnackBar,
              private _Api: MyApi) {
        //this.buttonTest = this.data.buttonText;
        if(data.status===1){
          this.termCourse = data.course;
        }
  }

  datePickerConfig = {
    drops: 'down'
  };
  dayWeekType: SelectType[] = [
    {value:'0',viewValue:'شنبه'},
    {value:'1',viewValue:'یک شنبه'},
    {value:'2',viewValue:'دو شنبه'},
    {value:'3',viewValue:'سه شنبه'},
    {value:'4',viewValue:'چهار شنبه'},
    {value:'5',viewValue:'پنج شنبه'},
    {value:'6',viewValue:'جمعه'}
  ];
  //day: number=0;
  //startTime: string='00:00:00';
  //endTime: string='02:00:00';
  //examTime: string='';

  termCourse: TermCourse = {
    id: -1,
    master: '',
    courses: '',
    priority: false,
    date:[
        {
            startTime: "8:00:00",
            endTime: "10:00:00",
            date: "",
            week: "0"
        }
    ],
    finalExam: {
        startTime: "9:30:00",
        endTime: "12:00:00",
        date: '',
        week: ''
    },
    description: '-',
    selected: false,
    status: 0
  };

  addTime(){
    let new_date = {
      startTime: "8:00:00",
      endTime: "10:00:00",
      date: "",
      week: "0"
    }
    this.termCourse.date.push(new_date);
    console.log(this.termCourse);
  }
  
  ngOnInit(): void {
    console.log(this.data);
  }
  
  saveButton(){
    if(this.data.status===0){
      this._Api.addSemesterCourse(this.termCourse).subscribe(
        result=>{
          this.dialogRef.close(result);
        }
      );
    }else if(this.data.status===1){
      this._Api.editSemesterCourse(this.termCourse).subscribe(
        result=>{
          this.dialogRef.close(result);
        }
      );
    }
    
  }
  deleteRow(i){
    if(i!==-1){
      this.termCourse.date.splice(i,1);
    }
  }

}
