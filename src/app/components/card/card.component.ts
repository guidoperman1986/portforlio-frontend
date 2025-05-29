import { Component, input } from '@angular/core';
import { PercentageItem } from '../../interfaces/resume.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  title    = input<string>();
  content  = input<string>();
  width    = input.required();
  height   = input.required();
  bg       = input.required();
  border   = input();
  minWidth = input('22rem');
  cardType = input<'normal' | 'icon' | 'percentage'>('normal')
  imgUrl   = input('')

  percentageItems = input<PercentageItem[]>();
}
