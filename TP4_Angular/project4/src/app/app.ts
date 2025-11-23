import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Articles } from './articles/articles';
import { Produits } from './produits/produits';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Articles,Produits],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project4');
}
