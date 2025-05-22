import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { CustomScrollbarComponent } from "../../shared/custom-scrollbar/custom-scrollbar.component";
import { CardComponent } from "../card/card.component";
import { softSkillsStore } from '../../stores/softskills.store';

@Component({
  selector: 'app-soft-skills',
  imports: [CustomScrollbarComponent, CardComponent],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.scss'
})
export class SoftSkillsComponent implements OnInit {
  scrollContainer = viewChild<HTMLDivElement>('scrollContainer');

  width = 'calc(50% - 10px)';
  height = '10rem';
  bg = 'linear-gradient(to bottom right, hsl(240,1%,20%) 3%, hsl(0,0%,15%) 97%)';

  softSillsStore = inject(softSkillsStore)

  ngOnInit(): void {    
    this.softSillsStore.loadSoftSkills();
  }
}
