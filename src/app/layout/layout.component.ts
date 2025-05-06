import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsideComponent } from '../components/aside/aside.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, AsideComponent, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
