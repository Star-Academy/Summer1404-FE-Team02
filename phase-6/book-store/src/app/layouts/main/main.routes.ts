import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      {
        title: 'Book Store page',
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
