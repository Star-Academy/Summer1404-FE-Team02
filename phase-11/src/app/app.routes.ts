import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layouts/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'admin-panel',
    loadChildren: () =>
      import('./layouts/admin-panel/admin-panel.module').then((m) => m.AdminPanelModule),
  },
];
