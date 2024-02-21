import { Component } from '@angular/core';

@Component({
  selector: 'button-awesome',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass',
})
export class ButtonComponent {
  title = 'button-awesome';
  private isToggle = false;
  onButtonClick() {
    let size = '300px';

    if (this.isToggle) {
      size = '100px';
    }
    document.documentElement.style.setProperty('--size', size);
    this.isToggle = !this.isToggle;
  }
}

const syncMouseMove = ({
  x: pointerX,
  y: pointerY,
}: {
  x: number;
  y: number;
}) => {
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  const xp = (pointerX / window.innerWidth).toFixed(2);
  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--xp', xp);
  document.documentElement.style.setProperty('--y', y);
};
document.body.addEventListener('pointermove', syncMouseMove);
