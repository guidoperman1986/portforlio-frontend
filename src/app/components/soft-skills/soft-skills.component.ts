import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { CustomScrollbarComponent } from "../../shared/custom-scrollbar/custom-scrollbar.component";

@Component({
  selector: 'app-soft-skills',
  imports: [CustomScrollbarComponent],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.scss'
})
export class SoftSkillsComponent {
  scrollContainer = viewChild<HTMLDivElement>('scrollContainer');
}
