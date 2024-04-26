import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'people', loadComponent: () => import('./people/people.component').then((c) => c.PeopleComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then((c) => c.AboutComponent) },
  { path: '**', redirectTo: '/people' },
];
