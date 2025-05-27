import { Component, input } from '@angular/core';

export interface TimelineItem {
    name: string;
    start: number;
    content: string;
    end?: number;
}

export interface TimelineItems {
    timelineTitle: string;
    items: TimelineItem[];
}
    



@Component({
  selector: 'app-timeline-items',
  imports: [],
  templateUrl: './timeline-items.component.html',
  styleUrl: './timeline-items.component.scss'
})
export class TimelineItemsComponent {
  timelineDetails = input.required<TimelineItems>()
}
