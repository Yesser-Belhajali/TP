import { Component } from '@angular/core';
import { utilisateur } from './utilisateur/utilisateur';
import { FormsModule } from '@angular/forms'
import { Profil } from './profil/profil';
import { adresse } from './adresse/adresse';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [utilisateur,Profil,adresse] // <-- OBLIGATOIRE
})
export class App { }
