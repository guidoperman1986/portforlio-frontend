import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent),
        children: [
            {
                path: 'about',
                loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent),
                data: { title: 'About Me' },
            },
            {
                path: 'resume',
                loadComponent: () => import('./pages/resume/resume.component').then(c => c.ResumeComponent),
                data: { title: 'Resume' },
            },
            {
                path: 'portfolio',
                loadComponent: () => import('./pages/portfolio/portfolio.component').then(c => c.PortfolioComponent),
                data: { title: 'Portfolio' },
            },
            {
                path: 'contact',
                loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent),
                data: { title: 'Contact' },
            },
        ]
    }
];
