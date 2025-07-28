import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from '../../pages/home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { mainRoutes } from './main.routes';

@NgModule({
  declarations: [MainComponent, HomeComponent],
  imports: [CommonModule, RouterModule, RouterOutlet],
})
export class MainModule {}
