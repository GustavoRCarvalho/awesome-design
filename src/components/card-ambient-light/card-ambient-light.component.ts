import { Component } from '@angular/core';

@Component({
  selector: 'card-ambient-light',
  standalone: true,
  templateUrl: './card-ambient-light.component.html',
})
export class CardAmbientLight {
  ngOnInit() {
    for (let i = 0; i < 4; i++) {
      let card = document
        .querySelectorAll<HTMLElement>('.ambientCard')
        ?.item(i);
      card.addEventListener('click', () => {
        const isGray = Number(card?.style.getPropertyValue('--grayscale'));
        card?.style.setProperty('--grayscale', isGray ? '0' : '1');
        card?.style.setProperty('--animationTime', isGray ? '10s' : '0s');
      });
    }
  }
}
