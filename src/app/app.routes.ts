import { Routes } from '@angular/router';
import { ButtonComponent } from '../components/button-awesome/button.component';

export const routes: Routes = [
  {
    path: 'cards',
    component: ButtonComponent,
  },
  {
    path: 'buttons',
    component: ButtonComponent,
  },
  {
    path: 'buttons/background-circle-motion-button',
    component: ButtonComponent,
  },
];
