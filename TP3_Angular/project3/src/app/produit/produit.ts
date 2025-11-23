import { Component,EventEmitter,Input,Output } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  imageUrl: string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcT4wAB1NvPo7PHGU--ahoAuAwR2_v0pA3w&s";
  enStock:boolean=true;
  afficherAlerte():void{
    alert("Produit ajouté au panier: " + this.nomProduit);
  }
  toggleStock():void{
    this.enStock=!this.enStock;
  }
  @Output() ajoutPanier=new EventEmitter<void>();
  ajouterAuPanier(){
    this.ajoutPanier.emit();
    this.afficherAlerte();
  }

  @Input() nomProduit:string="";
  @Input() prix:number=0;
}
