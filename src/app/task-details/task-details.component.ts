import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectType } from '../shared/select';
import { Task } from '../shared/Task';
import { TaskManagerComponent } from '../task-manager/task-manager.component';
import * as moment from 'jalali-moment';

// text area:
import { CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
import { take} from 'rxjs/operators';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<TaskManagerComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Task,
                private _snackBar: MatSnackBar,
                private _ngZone: NgZone) { 
      this.task = data;
  }
  
  dateObject: any;
  datePickerConfig = {
    drops: 'down',
    minDate: moment()
  }

  statusType: SelectType[] = [
    {value:'0',viewValue:'شروع نشده'},
    {value:'1',viewValue:'درحال انجام'},
    {value:'2',viewValue:'انجام شده'}
  ];
  task: Task;
  starCount:number = 3;

  ngOnInit(): void {
    //convert string of date to moment object
    console.log(this.task.deadlineDateTime);
    let tempTime = moment(this.task.deadlineDateTime,"YYYY,MM,DD HH:mm");
    console.log(tempTime.locale('fa'));
    if(tempTime.isValid()){
      this.dateObject = tempTime.locale('fa');
    }else{
      this.dateObject = moment().locale('fa');
    }

  }
  changeDate(){
    let now = moment();
    let tempTime = moment(this.dateObject,"jYYYY,jMM,jDD HH:mm");
    this.task.deadlineDateTime = tempTime.locale('en').format('YYYY/MM/DD HH:mm');

    let daysRemaining = (tempTime.diff(now,'days'));
    if(daysRemaining>0){
      this.task.deadlineDaysRemaining = daysRemaining+' روز';
    }else if(daysRemaining<0){
      // زمان انتخاب شده امکان پذیر نمیباشد
      this.task.deadlineDaysRemaining = 'پایان یافته'
    }else{
      let hourRemaining = (Math.round(tempTime.diff(now,'seconds')/(60*60)));
      if(hourRemaining>0){
        this.task.deadlineDaysRemaining = hourRemaining +' ساعت';
      }else if(hourRemaining<0){
        // زمان انتخاب شده امکان پذیر نمیباشد
        this.task.deadlineDaysRemaining = 'پایان یافته'
      }else{
        let minuteRemaining = (Math.round(tempTime.diff(now,'seconds')/(60)));
        if(minuteRemaining>0){
          this.task.deadlineDaysRemaining = minuteRemaining +' دقیقه';
        }else if(minuteRemaining<0){
          // زمان انتخاب شده امکان پذیر نمیباشد
          this.task.deadlineDaysRemaining = 'پایان یافته'
        }else{
          let secondsRemaining = (Math.round(tempTime.diff(now,'seconds')));
          if(minuteRemaining>0){
            this.task.deadlineDaysRemaining = secondsRemaining +' ثانیه';
          }else{
            // زمان انتخاب شده امکان پذیر نمیباشد
            this.task.deadlineDaysRemaining = 'پایان یافته'
          }
        }
      }
    }

  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  onRatingChanged(newRating){
    console.log(newRating);
    this.task.priority = newRating;
  }

}
