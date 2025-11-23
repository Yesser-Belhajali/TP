import { Component, OnInit } from '@angular/core';
import { Student } from './TypeStudent';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  standalone:true,
  imports: [UpperCasePipe,FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class etudiant implements OnInit{
  etudiant:Student={
    id:1,
    name:"Ali",
    lastname:"Ben Saleh",
    classe:"IGL3",
    average:15.81,
  };
  constructor(){}
  ngOnInit(): void {
    
  }
}
