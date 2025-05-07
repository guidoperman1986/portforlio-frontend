import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  pageTitle = signal<string>('');

  ngOnInit(): void {
    // Handle page reload by directly accessing the snapshot data
    const initialTitle = this.activatedRoute.firstChild?.snapshot.data['title'];
    if (initialTitle) {
      this.pageTitle.set(initialTitle);
    }

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute.firstChild?.snapshot.data['title'])
      )
      .subscribe(this.pageTitle.set);


  }

}
