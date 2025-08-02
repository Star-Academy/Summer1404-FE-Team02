import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Q1Component} from "./q1/q1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Q1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'phase-7';
}
