import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'button-charge',
  standalone: true,
  templateUrl: './button-charge.component.html',
})
export class ButtonCharge {
  toggleButton: boolean = false;
  color: string = '#000';
  timeoutIds: any[] = [];

  constructor(private ngZone: NgZone) {}

  onClickButton() {
    this.toggleButton = !this.toggleButton;
    this.color = this.toggleButton ? '#81fd76' : '#000';

    this.timeoutIds.forEach((id) => clearTimeout(id));
    this.timeoutIds = [];

    const buttonComponent = document.querySelector<HTMLElement>('.charge');

    buttonComponent?.style.setProperty(
      '--fill-color',
      this.toggleButton ? '#81fd76' : 'transparent'
    );

    for (let i = 55; i > 0; i--) {
      const timeoutId = setTimeout(() => {
        this.ngZone.run(() => {
          if (this.toggleButton) {
            buttonComponent?.style.setProperty('--porcent', i * 2 + '%');
          } else {
            buttonComponent?.style.setProperty('--porcent', 110 - i * 2 + '%');
          }
        });
      }, i * 10);

      this.timeoutIds.push(timeoutId);
    }
    console.log(this.color);
  }
}
