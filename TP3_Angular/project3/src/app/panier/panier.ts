import { Component } from '@angular/core';
import { Produit } from '../produit/produit';

@Component({
  selector: 'app-panier',
  imports: [Produit],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
  compteur:number=0;
  incrementer(){
    this.compteur++;
  }
}
