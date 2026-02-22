// src/app/app.routes.ts
import { Routes } from '@angular/router';
// Lazy loaded routes
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  }, 
  {
    path: 'contribute',
    loadComponent: () => import('./contribute/contribute.component').then(m => m.ContributeComponent)
  },
  {
    path: 'events-calendar',
    loadComponent: () => import('./event-calendar/event-calendar.component').then(m => m.EventCalendarComponent)
  }
];
