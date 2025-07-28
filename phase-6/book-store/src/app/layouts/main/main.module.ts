import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from '../../pages/home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { mainRoutes } from './main.routes';
import {TopBarComponent} from "../../pages/home/top-bar/top-bar.component";
import {BooksComponent} from "../../pages/home/books/books.component";

@NgModule({
  declarations: [MainComponent, HomeComponent],
  imports: [CommonModule, RouterModule, RouterOutlet, TopBarComponent, BooksComponent],
})
export class MainModule {}
