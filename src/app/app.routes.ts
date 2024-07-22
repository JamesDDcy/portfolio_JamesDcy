import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { AboutComponent } from './about/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'projects',
        loadComponent: () => import('./projects/projects/projects.component').then((c) => c.ProjectsComponent), // for lazy loading
        title: 'Projects',
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about/about.component').then((c) => c.AboutComponent), // for lazy loading
        title: 'About',
    },
];
