import { Component, input } from '@angular/core';

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
  minWidth = input('22rem');
  cardType = input<'normal' | 'icon'>('normal')
  imgUrl   = input('')
}
