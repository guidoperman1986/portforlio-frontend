import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-what-i-do',
  imports: [CardComponent],
  templateUrl: './what-i-do.component.html',
  styleUrl: './what-i-do.component.scss'
})
export class WhatIDoComponent {
  width = 'calc(50% - 10px)';
  height = '10rem';
  bg = 'linear-gradient(to bottom right, hsl(240,1%,20%) 3%, hsl(0,0%,15%) 97%)';
}
