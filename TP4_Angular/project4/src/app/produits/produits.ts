import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-produits',
  imports: [FormsModule, NgFor, NgStyle],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
  produits = [
    { nom: "Caméra", stock:60 },
    { nom: "Ordinateur", stock:35 },
    { nom: "Smartphone", stock:10 },
  ];

  modifierStock(produit: any, nouvelleValeur: string) {
    const val = Number(nouvelleValeur);
    if (!isNaN(val) && val >= 0) {
      produit.stock = val;
    }
  }

  getCouleurStock(stock: number): string {
    if (stock > 50) return 'green';
    if (stock >= 20) return 'orange';
    return 'red';
  }
}
