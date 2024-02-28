import { Routes } from '@angular/router';
import { ButtonComponent } from '../components/button-awesome/button.component';
import { Grid } from '../components/grid/grid';
import { NotFoundComponent } from '../components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'cards',
    component: Grid,
  },
  {
    path: 'buttons',
    component: Grid,
  },
  {
    path: 'buttons/background-circle-motion-button',
    component: ButtonComponent,
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
