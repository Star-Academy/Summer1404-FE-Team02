import { combineLatest } from 'rxjs';
import { HomeComponent } from '../../pages/home/home.component';
import { Component } from '@angular/core';

export const mainRoutes = [
  {
    path: 'home',
    component: HomeComponent,
  },
];
