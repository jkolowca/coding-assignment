import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'about', loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)},
    {path: 'people', loadComponent: () => import('./people/people.component').then(c => c.PeopleComponent)},
    {path: '**', redirectTo: '/about'},
];
