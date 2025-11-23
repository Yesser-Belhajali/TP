import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf,NgClass } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [FormsModule,NgIf,NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isLoggedIn:boolean=false;
  username="";
  message="";
  status:"success"|"error"|""="";
  readonly correctName="Yesser";
  toggleLogin() {
    if (this.username === this.correctName) {
      this.isLoggedIn = !this.isLoggedIn;
      this.message = "";
      this.status="success";
    } else {
      this.message = "Nom incorrect !";
      this.status="error";
    }
  }
}
