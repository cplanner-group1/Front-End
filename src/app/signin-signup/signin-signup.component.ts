import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


import { MyApi } from '../services/user.services';

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
              private _Api: MyApi) {}


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

  signin(){
    console.log(1);
    let item = 
    {
      email: "ali.lod78@gmail.com",
      password: "itismtpassali78"
    }
    this._Api.login(item).subscribe
      (result => {
          console.log(result);
        
      }
    );
  }
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
