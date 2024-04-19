import { Routes } from '@angular/router';
import { ButtonComponent } from '../components/button-awesome/button.component';
import { Grid } from '../components/grid/grid';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { ButtonCharge } from '../components/button-charge/button-charge.component';
import { BoobleCardComponent } from '../components/bobble-card/bobble-card.component';

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
  {
    path: 'buttons/button-charge',
    component: ButtonCharge,
  },
  {
    path: 'cards/booble-card',
    component: BoobleCardComponent,
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
