import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseSelectionComponent } from '../course-selection/course-selection.component';
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
              private _snackBar: MatSnackBar) {
        //this.buttonTest = this.data.buttonText;
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
    priority: '1',
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
    selected: 0 
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
    this.dialogRef.close(this.termCourse);
  }

}
