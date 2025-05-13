import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { SoftSkillsComponent } from "../../components/soft-skills/soft-skills.component";
import { WhatIDoComponent } from "../../components/what-i-do/what-i-do.component";
import { TechExperienceComponent } from "../../components/tech-experience/tech-experience.component";

@Component({
  selector: 'app-about',
  imports: [SoftSkillsComponent, WhatIDoComponent, TechExperienceComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
}
