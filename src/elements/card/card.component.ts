import { Component, Input } from '@angular/core';
import { IAnimal } from './card.models';

@Component({
  selector: 'bindy-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class BindyCardComponent {
  @Input() animal: IAnimal;
  @Input() imgUrl: string;

  goToDetail() {
    this.animal.action();
  }
}
