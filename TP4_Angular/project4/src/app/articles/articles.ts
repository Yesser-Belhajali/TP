import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgFor,NgClass} from '@angular/common';

@Component({
  selector: 'app-articles',
  imports: [FormsModule, NgFor, NgClass],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  articles = [
    { titre: "Angular Basics", contenu: "Introduction à Angular.",importance:"élevée" },
    { titre: "TypeScript", contenu: "Les bases de TS.",importance:"moyenne" },
    { titre: "HTML & CSS", contenu: "Structure et style.",importance:"faible" }
  ];

  newTitre: string = "";
  newContenu: string = "";
  newImportance="faible";

  ajouterArticle() {
    if (this.newTitre.trim() && this.newContenu.trim()) {
      this.articles.push({
        titre: this.newTitre,
        contenu: this.newContenu,
        importance: this.newImportance
      });
      this.newTitre = "";
      this.newContenu = "";
      this.newImportance="faible";
    }
  }
}
