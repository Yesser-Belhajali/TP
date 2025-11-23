import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

alert("Nom d'utilisateur pour se connecter : Yesser");

@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './taches.html',
  styleUrl: './taches.css'
})
export class Taches {

  username: string = "";
  isLoggedIn: boolean = false;
  message: string = "";

  nouvelleTache = "";
  nouvellePriorite = "moyenne";

  taches: any[] = [
    { description: 'Faire les courses', priorite: 'haute', complete: false },
    { description: 'Répondre aux emails', priorite: 'moyenne', complete: false },
    { description: 'Lire un livre', priorite: 'basse', complete: true }
  ];

  toggleLogin() {
    if (this.username === "Yesser") {
      this.isLoggedIn = !this.isLoggedIn;
      this.message = "";
    } else {
      this.message = "Nom incorrect !";
      this.isLoggedIn = false;
    }
  }

  ajouterTache() {
    if (!this.nouvelleTache.trim()) return;

    this.taches.push({
      description: this.nouvelleTache,
      priorite: this.nouvellePriorite,
      complete: false
    });

    this.nouvelleTache = "";
    this.nouvellePriorite = "moyenne";
  }

  basculerStatut(tache: any) {
    tache.complete = !tache.complete;
  }

  supprimerTache(index: number) {
    this.taches.splice(index, 1);
  }
}
