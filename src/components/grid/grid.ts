import { Location } from '@angular/common';
import { Component } from '@angular/core';

interface CardsList {
  label: string;
  src: string;
}

const listMenu = [
  {
    title: 'buttons',
    cards: [
      {
        label: 'background-circle-motion-button',
        src: '../../assets/images/background-circle-motion-button.png',
      },
      {
        label: 'button-charge',
        src: '../../assets/images/button-charge.png',
      },
    ],
  },
  {
    title: 'cards',
    cards: [
      {
        label: 'booble-card',
        src: '../../assets/images/bobble-card.png',
      },
      {
        label: 'error',
        src: '../../assets/images/background-circle-motion-button.png',
      },
    ],
  },
];

@Component({
  selector: 'grid',
  standalone: true,
  templateUrl: './grid.html',
})
export class Grid {
  title = 'grid';
  constructor(private location: Location) {}

  pageLabel: string = this.location.path().split('/')[1];
  list: Array<CardsList> =
    listMenu[listMenu.findIndex((value) => value.title === this.pageLabel)]
      .cards;
}
