import { Component, OnInit } from '@angular/core';
//import { NgxStarRatingModule } from 'ngx-star-rating';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { SelectType } from '../shared/select';
import { Task } from '../shared/Task';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import * as moment from 'jalali-moment';
import { MyApi } from '../services/user.services';



@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {

  rating:number = 2;
  starCount:number = 3;
  constructor(public dialog: MatDialog,
              private _Api: MyApi) { }

  statusType: SelectType[] = [
      {value:'0',viewValue:'شروع نشده'},
      {value:'1',viewValue:'درحال انجام'},
      {value:'2',viewValue:'انجام شده'}
  ];

  //checkList:boolean[]=[];
  tasks:Task[]=[];


  
  dateObject = moment('1395-11-22','jYYYY,jMM,jDD');

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    this._Api.getTask().subscribe(
      response=>{
        if(response){
          console.log(response.tasks_list);
          for(let item of response.tasks_list){
            let task: Task={
              checkList:false,
              deadlineDateTime:item.deadline,
              deadlineDaysRemaining:item.remained_time,
              deadlinePercentage:"",
              lastChangeDate:"",
              description:item.description,
              priority:item.priority,
              id:item.id,
              owner:item.group,
              status:item.status+'',
              title:item.title
            };
            this.tasks.push(task);
          }
        }
    });
  }

  editView:boolean =  false;
  enableEdit(){
    if(this.editView===false){
      this.editView = true;
    }else{
      this.editView = false;
    }
  }

  // add task
  addTask(){ // add row
    let new_task: Task = {
        checkList: false,
        id:-1,
        title:'',
        owner: '',

        deadlineDateTime:'',
        deadlinePercentage: '',
        deadlineDaysRemaining: '',

        status: '0',
        priority: '1',

        lastChangeDate:'همین الان',
        description: "توضیحات مربوط به ویژگی را اینجا وارد کنید"
    }
    this._Api.addTask().subscribe(
      response=>{
        if(response){
          new_task.id = response.id;
          this.tasks.push(new_task);
        }
      }
    )
  } 
  editTask(){
    // TO DO
    
  }
  // open task modal
  taskDetails(task:Task){
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      width: '1000px',
      height: '600px',
      data: task
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //console.log(result);
        // oversell
        
      }
    });
  }


  // change priority:
  onRatingChanged(newRating,task){
    //console.log(newRating);
    task.priority = newRating;
  }

  // change items place while drag and drop:
  drop(event: CdkDragDrop<string[]>) {
    //console.log("now: "+ event.currentIndex);
    //console.log("old "+ event.previousIndex);
    let data = 
    {
      id:   this.tasks[event.previousIndex].id,
      old:  event.previousIndex,
      new:  event.currentIndex
    }
    this._Api.dragTask(data).subscribe(
      response=>{
        if(response){
          console.log(response);
        }
      }
    );
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);

  }


  //check list column:
  masterToggleValue: boolean = false;
  masterToggleIndeterminate: boolean = false;
  isAllSelected(): boolean {
    for(let item of this.tasks){
      if(item.checkList===false){
        return false;
      }
    }
    return true;
  }
  isAllNotSelected(): boolean {
    for(let item of this.tasks){
      if(item.checkList===true){
        return false;
      }
    }
    return true;
  }
  masterToggle(e) {
    //console.log(e);
    if(e===true){
      let index = 0;
      for(let item of this.tasks){
        this.tasks[index].checkList = true;
        index++;
      }
    }
    if(e===false){
      let index = 0;
      for(let item of this.tasks){
        this.tasks[index].checkList = false;
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

  // delete tasks:
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
          let deleteItems: number[] = []
          if(this.tasks[i].id!=-1){
            deleteItems.push(this.tasks[i].id);
          }
          this.tasks.splice(i,1);
          this.deleteTask(deleteItems);
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
        let n = this.tasks.length;
        let deleteItems: number[] = []
        for(let i = n-1 ; i >= 0 ; i--){
          if(this.tasks[i].checkList===true){
            if(this.tasks[i].id!=-1){
              deleteItems.push(this.tasks[i].id);
            }
            this.tasks.splice(i,1);
          
          }
        }
        this.masterToggleValue = false;
        this.masterToggleIndeterminate = false;
        this.deleteTask(deleteItems);
      }
    });
    
  }
  deleteTask(deleteItems:number[]){
    let deletObject = { "deleted":deleteItems };
    this._Api.deleteTask(deletObject).subscribe(
      response=>{
        if(response){
          console.log(response);
        }
      }
    );
  }
}
