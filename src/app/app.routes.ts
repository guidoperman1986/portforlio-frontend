import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent),
        children: [
            { path: 'about', loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent) },
            { path: 'resume', loadComponent: () => import('./pages/resume/resume.component').then(c => c.ResumeComponent) },
            { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio.component').then(c => c.PortfolioComponent) },
            { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent) },
        ]
    }
];
