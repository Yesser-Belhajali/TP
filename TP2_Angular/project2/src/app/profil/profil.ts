import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.html',
  styleUrl: './profil.css',
  imports: [FormsModule]
})
export class Profil {
  utilisateur={
    prenom:"",
    age:null
  };
}
