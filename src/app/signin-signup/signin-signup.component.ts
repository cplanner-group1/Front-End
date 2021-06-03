import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MyApi } from '../services/user.services';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoAlertComponent } from '../info-alert/info-alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.scss'],
})

export class SigninSignupComponent implements OnInit {

  ngOnInit(): void {
  }  

  //FORGOT PASSWORD MODAL
  closeResult = '';

  constructor(private modalService: NgbModal,
              private _Api: MyApi,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {}


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

  //signup for mobile view 
  signUpMobile() {
    let body = document.getElementById('body');
    body.classList.remove("heading");
    console.log(body);
  }

  title = 'padis';


  email: string;
  password: string;
  username: string;
  // email: "ali.lod78@gmail.com"
  // password: "itismypassali78"

  signin(){
    //console.log(1);
    if(this.email && this.password){
      let item = 
      {
        email: this.email,
        password: this.password
      }

      const myObserver = {
        next: (x) => {
          console.log('user logged in');
          this.router.navigate(['/dashboard']);
        },
        error: (err: Error) => console.error(err)
      };

      this._Api.login(item).subscribe(myObserver);
 
    }
  }

  checkEmailAlert(){
    const dialogRef = this.dialog.open(InfoAlertComponent, {
      minWidth: '400',
      maxWidth: '90%',
      data: { 
        title: "توجه",
        message: "لطفا ایمیل ارسال شده را تایید کنید سپس برای ورود به صفحه‌ی لاگین بروید."
      }
    });
  }

  signup(){
    //ALERT
    this.checkEmailAlert();
    
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
          console.log('user registered in');
          //this.router.navigate(['/dashboard']);
        },
        error: (err: Error) => console.error(err)
      };

      this._Api.register(item).subscribe(myObserver);
 
    } 
  }
}
