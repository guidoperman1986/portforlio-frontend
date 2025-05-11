import { Component, ElementRef, OnInit, signal, viewChild } from '@angular/core';
import { SoftSkillsComponent } from "../../components/soft-skills/soft-skills.component";

@Component({
  selector: 'app-about',
  imports: [SoftSkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
}
