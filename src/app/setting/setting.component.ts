import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  //INFO
  username: string = '';
  email: string = '';
  password: string = '';

  overallAverage: string = '';
  termAverage: string = '';
  universityName: string = '';
  universitySubject: string = ''

  constructor() { }


  ngOnInit(): void {
  }


}
