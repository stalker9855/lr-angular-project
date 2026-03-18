import { Routes } from '@angular/router';
import { Wine } from './wine/wine';
import { Greeting } from './greeting/greeting';
import { UserListComponent } from './user-list-component/user-list-component';

export const routes: Routes = [
  {
    component: Greeting,
    path: '',
    pathMatch: 'full',
  },
  {
    component: UserListComponent,
    path: 'users',
  },
  {
    component: Wine,
    path: 'wine',
  },
];
