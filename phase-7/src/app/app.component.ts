import { Component } from '@angular/core';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import {Q3Component} from "./q3/q3.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Q1Component, Q2Component, Q3Component, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'phase-7';
}
