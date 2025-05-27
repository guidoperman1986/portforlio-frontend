import { Component, inject, OnInit } from '@angular/core';
import { TimelineItemsComponent } from "../../shared/timeline-items/timeline-items.component";
import { resumeStore } from '../../stores/resume.store';

@Component({
  selector: 'app-resume',
  imports: [TimelineItemsComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  store = inject(resumeStore);

  ngOnInit(): void {
    this.store.loadEducation();
    this.store.loadExperience();
  }

}
