import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MyApi } from '../services/user.services';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoAlertComponent } from '../info-alert/info-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import * as moment from 'moment';



@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.scss'],
})

export class SigninSignupComponent implements OnInit {

  ngOnInit(): void {
  }  

  constructor(private modalService: NgbModal,
              private _Api: MyApi,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar) {}


  //FORGOT PASSWORD MODAL
  closeResult = '';

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //sign-in sign-up toggle panel
  panelPositionAdd(){
    let container = document.getElementById('container');
    container?.classList.add("right-panel-active");
  }
  panelPositionRemove() {
    let container = document.getElementById('container');
    container?.classList.remove("right-panel-active");
  }

  title = 'padis';


  email: string;
  password: string;
  username: string;
  // email: "ali.lod78@gmail.com"
  // password: "itismypassali78"

  signin(){
    if(this.email && this.password){
      let item = 
      {
        email: this.email,
        password: this.password
      }
/*
      const myObserver = {
        next: (x) => {
          console.log('user logged in');
          window.location.href = '/dashboard';

          //this.router.navigate(['/dashboard']);
        },
        error: (err: Error) => {
          console.error(err);
          console.log('error');
          this.emailOrPasswordError (); 
        }
        
      };
*/
      this._Api.login(item).subscribe(
        response=>{
          const user = response;
            if(user){
              /*console.log(user);
              localStorage.setItem('added',moment().format());
              localStorage.setItem('token',user.tokens.access);
              localStorage.setItem('refresh',user.tokens.refresh);
              window.location.href = '/dashboard';
              */
             if(user.status==='1'){
                  localStorage.setItem('added',moment().format());
                  localStorage.setItem('token',user.tokens.access);
                  localStorage.setItem('refresh',user.tokens.refresh);
                  localStorage.setItem('status','1');
                  window.location.href = 'http://localhost:4200/dashboard';
              }else{
                  this.openSnackBar(user.status)
              }
            }
        }
      );
 
    }
  }

  emailOrPasswordError () {
    const dialogRef = this.dialog.open(InfoAlertComponent, {
      minWidth: '400',
      maxWidth: '90%',
      data: { 
        title: "??????",
        message: "??????????/?????? ???????????? ???? ?????? ?????? ???????????? ??????. ???????? ???? ???????? ?? ???????????? ???????? ????????."
      }
    });
  }

  checkEmailAlert(){
    const dialogRef = this.dialog.open(InfoAlertComponent, {
      minWidth: '400',
      maxWidth: '90%',
      data: { 
        title: "????????",
        message: "???????? ???????? ?????????? ???????? ???????????? ?????? ???????????????? ???? ???? ????????. ?????? ???? ???????? ?????????? ?????????????? ?? ???????? ????????."
      }
    });
  }

  signup(){
    
    //API
    if(this.email && this.password && this.username){
      let item = 
      {
        email: this.email,
        password: this.password,
        username: this.username
      }
    
      const myObserver = {
        next: (x) => {
          this.checkEmailAlert();
          console.log('user registered in');
          //this.router.navigate(['/dashboard']);
        },
        error: (err: Error) => {
          //this.openSnackBar("?????????????? ???????? ?????? ???????? ????????.");
          this.openSnackBar("???????? ???????? ?????????? ?? ?????? ?????????????? ???????????? ?? ?????? ???????? ???? 6 ?????? ???????? ????????.");
          //console.log('err');
        }
      };

/*
      result=>{
        if(result){
          console.log(result['data']);
          //ALERT
          this.checkEmailAlert();
          
          //this.openSnackBar(response);
        }
        
      }
  */
     this._Api.register(item).subscribe(myObserver);
    }
    
  }

    //SNACKBAR FOR 'SAVE' BUTTON
    durationInSeconds = 5;
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    message: string = '??????  ?????????? ????.';
  
    openSnackBar(message: string) {
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: this.durationInSeconds * 1000,
        data:{message:message},
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['alert-snackbar-success']
      });
    }
  

}
