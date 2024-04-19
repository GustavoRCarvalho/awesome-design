import { Component } from '@angular/core';
import { AddSpark } from '../../assets/Spark';
import { CommonModule } from '@angular/common';
import { ionReload } from '@ng-icons/ionicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'bobble-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  viewProviders: [provideIcons({ ionReload })],
  templateUrl: './bobble-card.component.html',
})
export class BoobleCardComponent {
  title = 'booble-card';
  items = [
    { id: 1, isClicked: false },
    { id: 2, isClicked: false },
    { id: 3, isClicked: false },
    { id: 4, isClicked: false },
    { id: 5, isClicked: false },
  ];
  porcent = 0;

  ngOnInit() {
    this.startLoading();
  }

  startLoading() {
    this.items = [
      { id: 1, isClicked: false },
      { id: 2, isClicked: false },
      { id: 3, isClicked: false },
      { id: 4, isClicked: false },
      { id: 5, isClicked: false },
    ];
    this.porcent = 0;
    for (let i = this.porcent; i < 101; i++) {
      this.items.forEach((value, index) => {
        if (i === 20 * value.id) {
          setTimeout(() => {
            let bobble = document
              .querySelectorAll<HTMLElement>('.bobbles')
              ?.item(index);

            const rectangle = bobble.getBoundingClientRect();
            const centerX = rectangle.left + rectangle.width / 2;
            const centerY = rectangle.top + rectangle.height / 2;

            bobble.dispatchEvent(
              new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                clientX: centerX,
                clientY: centerY,
              })
            );
          }, 50 * i);
        }
      });

      setTimeout(() => {
        this.porcent = i;
      }, 50 * i);
    }
  }

  onClickBubble(e: any, item: any) {
    AddSpark(e);
    item.isClicked = !item.isClicked;
    // setTimeout(() => {
    //   item.isClicked = !item.isClicked;
    // }, 1000);
  }
}
