import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { mainRoutes } from './layouts/main/main.routes';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: mainRoutes,
  },
];
