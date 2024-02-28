import { Component } from '@angular/core';
import { alphabetConstant, numbersConstant } from '../../assets/constant';
import { delayOnShowText } from '../../assets/functions';

@Component({
  selector: 'not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  title = 'not-found';
  titleLabel: string = '404';
  spanLabel: string = 'Sorry, this page was not found';
  ngOnInit() {
    const changeTitleLabel = (newText: string) => {
      this.titleLabel = newText;
    };
    const changeSpanLabel = (newText: string) => {
      this.spanLabel = newText;
    };
    delayOnShowText(this.titleLabel, numbersConstant, changeTitleLabel);
    delayOnShowText(this.spanLabel, alphabetConstant, changeSpanLabel, 10);
  }
}
