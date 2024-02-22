import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'button-navigation',
  standalone: true,
  templateUrl: './button-navigation.component.html',
})
export class ButtonNavigation {
  constructor(private location: Location) {}
  @Input() titulo!: string;
  title = 'button-navigation';
  isActive: boolean = false;

  ngOnInit() {
    this.isActive = this.location.path().split('/')[1] == this.titulo;
  }
}
