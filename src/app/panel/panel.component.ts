import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';
import { MyApi } from '../services/user.services';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private _Api: MyApi) { }

  ngOnInit(): void {
  }

  logout(){
    const dialogRef = this.dialog.open(DeleteAlertComponent, {
      minWidth: '400',
      maxWidth: '90%',
      data: { 
        title: "اخطار",
        message: "آیا نسبت به خروح از پنل مدیریت مطمئن هستید؟"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this._Api.logout().subscribe(
          response=>{
            if(response){
              console.log("user fucin log out");
            }
          }
        );
      }
    });
    
  }
}
