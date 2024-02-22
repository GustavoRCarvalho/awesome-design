import { Component } from '@angular/core';
import { ButtonNavigation } from './button-navigation.component';

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [ButtonNavigation],
  templateUrl: './navigation.component.html',
})
export class Navigation {
  title = 'navigation';
}
