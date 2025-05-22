import { Component, inject, OnInit } from '@angular/core';
import { activityStore } from '../../stores/activity.store';

@Component({
  selector: 'app-what-i-do',
  imports: [],
  templateUrl: './what-i-do.component.html',
  styleUrl: './what-i-do.component.scss'
})
export class WhatIDoComponent implements OnInit {
  width = 'calc(50% - 10px)';
  height = '10rem';
  bg = 'linear-gradient(to bottom right, hsl(240,1%,20%) 3%, hsl(0,0%,15%) 97%)';

  activitieStore = inject(activityStore);

  ngOnInit(): void {
    this.activitieStore.loadActivities();
  }
}
