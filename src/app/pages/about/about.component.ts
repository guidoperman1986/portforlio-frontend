import { Component, inject, OnInit } from '@angular/core';
import { SoftSkillsComponent } from "../../components/soft-skills/soft-skills.component";
import { TechExperienceComponent } from "../../components/tech-experience/tech-experience.component";
import { WhatIDoComponent } from "../../components/what-i-do/what-i-do.component";
import { resumeStore } from '../../stores/resume.store';

@Component({
  selector: 'app-about',
  imports: [SoftSkillsComponent, WhatIDoComponent, TechExperienceComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  resumeStore = inject(resumeStore);

  ngOnInit() {
    this.resumeStore.loadResume();
  }
    
}
