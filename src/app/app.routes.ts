import { Routes } from '@angular/router';
import { Wine } from './components/wine/wine';
import { Greeting } from './components/greeting/greeting';
import { About } from './components/about/about';
import { Help } from './components/help/help';

export const routes: Routes = [
  {
    component: Greeting,
    path: '',
    pathMatch: 'full',
  },
  {
    component: About,
    path: 'about',
  },
  {
    component: Help,
    path: 'help',
  },
  {
    component: Wine,
    path: 'wine',
  },
];
