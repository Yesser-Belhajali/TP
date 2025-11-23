import { Component,signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {etudiant} from './etudiant/etudiant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,etudiant],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title =signal("MyClass Will be Angular Heroes");
  myname="Yesser Belhajali";
}
