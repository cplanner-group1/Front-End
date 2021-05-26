import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  name: string = "ششششش";
  username: string = "";
  phonenumber: number = 0;
  killSomebody: boolean= true;

  constructor() { }


  ngOnInit(): void {
  }

  save(){
    
  }

}
