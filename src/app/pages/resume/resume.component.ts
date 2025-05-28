import { Component, inject, OnInit } from '@angular/core';
import { TimelineItemsComponent } from "../../shared/timeline-items/timeline-items.component";
import { resumeStore } from '../../stores/resume.store';
import { CardComponent } from "../../components/card/card.component";
import { PercentageCardComponent } from "../../shared/percentage-card/percentage-card.component";

@Component({
  selector: 'app-resume',
  imports: [TimelineItemsComponent, CardComponent, PercentageCardComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  store = inject(resumeStore);

  ngOnInit(): void {
    this.store.loadEducation();
    this.store.loadExperience();
    this.store.loadLanguage();
    this.store.loadSkill();
  }

}
