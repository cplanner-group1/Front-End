import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectType } from '../shared/select';
import { Task } from '../shared/Task';
import { TaskManagerComponent } from '../task-manager/task-manager.component';

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
  
  statusType: SelectType[] = [
    {value:'0',viewValue:'شروع نشده'},
    {value:'1',viewValue:'درحال انجام'},
    {value:'2',viewValue:'انجام شده'}
  ];
  task: Task;
  starCount:number = 3;

  ngOnInit(): void {
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
