import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  imports: [CommonModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  enStock:boolean=true;
  @Input() nomProduit: string = 'Produit Par Défaut';
  @Output() ajouterAuPanier=new EventEmitter<string>();
  toggleStock():void{
    this.enStock=!this.enStock;
  }
  ajouterProduit():void{
    this.ajouterAuPanier.emit(this.nomProduit);
  }
}
