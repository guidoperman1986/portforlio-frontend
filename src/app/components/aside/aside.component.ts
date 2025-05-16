import { Component, inject, OnInit } from '@angular/core';
import { InfoComponent } from "../info/info.component";
import { profileStore } from '../../stores/profile.store';

@Component({
  selector: 'app-aside',
  imports: [InfoComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent implements OnInit {
  profileStore = inject(profileStore);  

  ngOnInit() {
    this.profileStore.loadProfile();
  }
}
