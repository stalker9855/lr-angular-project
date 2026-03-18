import { Routes } from '@angular/router';
import { Wine } from './wine/wine';
import { Greeting } from './greeting/greeting';

export const routes: Routes = [
  {
    component: Greeting,
    path: '',
    pathMatch: 'full',
  },
  {
    component: Wine,
    path: 'wine',
  },
];
