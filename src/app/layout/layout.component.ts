import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsideComponent } from '../components/aside/aside.component';
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, AsideComponent, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
