import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { mainRoutes } from './layouts/main/main.routes';
import { PanelComponent } from './layouts/panel/panel.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layouts/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./layouts/panel/panel.module').then((m) => m.PanelModule),
  },
];
