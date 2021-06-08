import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';
import { MyApi } from '../services/user.services';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private _Api: MyApi,
              private route: ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.getUserName();
  }

  userName: string = "خوش‌آمدید";

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
            }
            console.log(response);
            this.router.navigate(['/landing']);

          }
        );
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');

      }
    });
    
  }

  getUserName(){
    let name: string = "";
    let surname: string = "";
    this._Api.getSettings().subscribe(
      response=>{
        if(response){
          name = response.first_name;
          surname = response.last_name;
          this.userName = name + ' ' + surname;

        }
    });

    
  }

}
/*
export class name {
  constructor(parameters) {
    
  }
  //private userName: string = "";
  userName = getUserName.userName();
}
*/
