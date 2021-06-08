import { Component, OnInit } from '@angular/core';
import { SelectTypeNumberValue } from '../shared/select';

@Component({
  selector: 'app-add-other',
  templateUrl: './add-other.component.html',
  styleUrls: ['./add-other.component.scss']
})
export class AddOtherComponent implements OnInit {

  constructor() { }
  datePickerConfig = {
    drops: 'down'
  };
  dayWeekType: SelectTypeNumberValue[] = [
    {value:0,viewValue:'شنبه'},
    {value:1,viewValue:'یک شنبه'},
    {value:2,viewValue:'دو شنبه'},
    {value:3,viewValue:'سه شنبه'},
    {value:4,viewValue:'چهار شنبه'},
    {value:5,viewValue:'پنج شنبه'},
    {value:6,viewValue:'جمعه'}
  ];
  day: number=0;
  startTime: string='00:00:00';
  endTime: string='02:00:00';
  examTime: string='';
  ngOnInit(): void {
  }

}
