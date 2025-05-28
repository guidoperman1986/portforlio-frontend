import { Component, input, OnInit } from '@angular/core';
import { PercentageItem } from '../../interfaces/resume.interface';

@Component({
  selector: 'app-percentage-card',
  imports: [],
  templateUrl: './percentage-card.component.html',
  styleUrl: './percentage-card.component.scss'
})
export class PercentageCardComponent implements OnInit {
  title    = input<string>();
  content  = input<string>();
  width    = input.required();
  height   = input.required();
  bg       = input.required();
  minWidth = input('22rem');

  percentageItems = input<PercentageItem[]>();

  ngOnInit(): void {
    console.log(this.percentageItems());
  }
}
