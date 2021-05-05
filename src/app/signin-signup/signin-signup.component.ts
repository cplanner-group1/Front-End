import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.scss']
})
export class SigninSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  panelPositionAdd(){
    let container = document.getElementById('container');
    container?.classList.add("right-panel-active");
  }
  panelPositionRemove() {
    let container = document.getElementById('container');
    container?.classList.remove("right-panel-active");
  }
  /*
  passwordVisibilityToggle() {

    var mdp = document.getElementById("password");
    var passwordEye = document.getElementById("password-eye");
  
    if (mdp?.nativeElement.setAttribute === 'password') {
      // - Le type de l'input type=password devient type=text
      mdp.type = "text";
      // - L'icone change et devient password-eye.on
      passwordEye?.classList.remove("off");
      passwordEye?.classList.add("on");
     } else {
       mdp.type = "password";
       passwordEye?.classList.remove("on");
      passwordEye?.classList.add("off");
     }
  } */
  title = 'padis';

}
