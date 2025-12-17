import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'design-system',
    loadComponent: () => import('./design-system/design-system.component').then(m => m.DesignSystemComponent)
  },
  {
    path: '',
    redirectTo: 'design-system',
    pathMatch: 'full'
  }
];

