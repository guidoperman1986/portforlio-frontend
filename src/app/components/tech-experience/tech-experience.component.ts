import { Component, viewChild } from '@angular/core';
import { CustomScrollbarComponent } from "../../shared/custom-scrollbar/custom-scrollbar.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-tech-experience',
  imports: [CustomScrollbarComponent, CardComponent],
  templateUrl: './tech-experience.component.html',
  styleUrl: './tech-experience.component.scss'
})
export class TechExperienceComponent {
  scrollContainer = viewChild<HTMLDivElement>('scrollContainer');

  width = '0rem';
  height = '10rem';
  bg = '';
}
