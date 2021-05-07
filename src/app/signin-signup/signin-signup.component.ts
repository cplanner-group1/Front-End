import { ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.scss'],
})

export class SigninSignupComponent implements OnInit {

  ngOnInit(): void {
  }

  closeResult = '';

  constructor(private modalService: NgbModal) {}

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

  panelPositionAdd(){
    let container = document.getElementById('container');
    container?.classList.add("right-panel-active");
  }
  panelPositionRemove() {
    let container = document.getElementById('container');
    container?.classList.remove("right-panel-active");
  }
  
  @ViewChild('passwordInput') input: ElementRef;

  passwordVisibilityToggle() {

    var passwordEye = document.getElementById("password-eye");
  
    if ((this.input.nativeElement as HTMLInputElement).type === 'password')
    {
      (this.input.nativeElement as HTMLInputElement).type = "text";
      passwordEye?.classList.remove("off");
      passwordEye?.classList.add("on");
     } else {
      (this.input.nativeElement as HTMLInputElement).type = "password";
       passwordEye?.classList.remove("on");
      passwordEye?.classList.add("off");
     }
  } 

  title = 'padis';

}


/* 
PASSWORD POPUP CODE
    $(".modal").each( function(){
      $(this).wrap('<div class="overlay1"></div>')
    });
    
    $(".open-modal").on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation;
      
      var $this = $(this),
          modal = $($this).data("modal");
      
      $(modal).parents(".overlay1").addClass("open");
      setTimeout( function(){
        $(modal).addClass("open");
      }, 350);
      
      $(document).on('click', function(e){
        var target = $(e.target);
        
        if ($(target).hasClass("overlay1")){
          $(target).find(".modal").each( function(){
            $(this).removeClass("open");
          });
          setTimeout( function(){
            $(target).removeClass("open");
          }, 350);
        }
        
      });
      
    });
    
    $(".close-modal").on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation;
      
      var $this = $(this),
          modal = $($this).data("modal");
      
      $(modal).removeClass("open");
      setTimeout( function(){	
        $(modal).parents(".overlay").removeClass("open");
      }, 350);
      
    });	
*/
