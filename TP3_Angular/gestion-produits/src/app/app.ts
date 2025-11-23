import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Produit} from "./produit/produit";
import {Panier} from "./panier/panier";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Produit,Panier,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-produits');
  panierItems:string[]=[];
  gererAjoutAuPanier(nomProduit:string):void{
    this.panierItems.push(nomProduit);
    console.log(`${nomProduit} ajouté au panier`);
  }
}
