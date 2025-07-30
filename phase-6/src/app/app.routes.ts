import { Routes } from '@angular/router';

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
