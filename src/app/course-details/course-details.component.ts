import { Component, Inject, OnInit,ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectType, SelectTypeNumberValue } from '../shared/select';
import { CourseTrack,Course } from '../shared/chart';
import { ChartsComponent } from '../charts/charts.component';

// text area:
import { CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
import { take} from 'rxjs/operators';

// chips:
import { COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import { MatChipInputEvent} from '@angular/material/chips';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { MyApi } from '../services/user.services';


export interface Pre{
  title: string;
  id: number;
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course: CourseTrack;
  statusType: SelectTypeNumberValue[] = [
    {value:0,viewValue:'پاس نشده'},
    {value:1,viewValue:'پاس شده'},
  ];
  constructor(public dialogRef: MatDialogRef<ChartsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CourseTrack,
              private _snackBar: MatSnackBar,
              private _Api: MyApi) { 
        this.course = data;
        //console.log(this.course);
  }

  ngOnInit(): void {
    //console.log(this.course);
    //let length: number = this.course.prerequisites.length;
    
    
  }


  iteration = 20;
  fruitValue = "";
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER /*, COMMA*/];


  prerequisiteData: string = '';
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      // @TODO --> inja byd aval y search knm k age vojod dsht qablan fqt id bgird
      let temp : string = value.trim();
      if(!this.course.prerequisites.includes(temp)){
        this.course.prerequisites.push(temp);
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  selectOptions(text){
    let value = text;
    if ((value || '').trim()) {
      // @TODO --> inja byd aval y search knm k age vojod dsht qablan fqt id bgird
      let temp : string = value.trim();
      if(!this.course.prerequisites.includes(temp)){
        this.course.prerequisites.push(temp);
      }
    }
  }

  remove(prerequisite: string): void {
    const index = this.course.prerequisites.indexOf(prerequisite);
    if (index >= 0) {
      this.course.prerequisites.splice(index, 1);
    }
  }

  submit(){
    
  }

  suggestedPrerequisite: string[] = [];
  suggestPrerequisite(text){
    this._Api.suggestionPrerequisites(text).subscribe(
      response => {
        if(response){
          this.suggestedPrerequisite = [];
          this.suggestedPrerequisite = response['suggestions'];
          //console.log(response['suggestions']);
        }
        
      }
    );
  }

  suggestedCourse: string[] = [];
  suggestCourse(text){
    this._Api.suggestionCourseChart(text).subscribe(
      response => {
        if(response){
          this.suggestedCourse = [];
          for(let item of response['courses']){
            if(!this.suggestedCourse.includes(item.title)){
              this.suggestedCourse.push(item.title);
            }
          }
          //this.suggestedCourse = response['courses'];
          //console.log(response['suggestions']);
        }
        
      }
    );
  }
}
