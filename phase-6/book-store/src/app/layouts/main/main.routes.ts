import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { MainComponent } from './main.component';
import { BookDetailComponent } from '../../pages/book-detail/book-detail.component';

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
      {
        path: 'books/:bookId',
        component: BookDetailComponent,
      },
    ],
  },
];
