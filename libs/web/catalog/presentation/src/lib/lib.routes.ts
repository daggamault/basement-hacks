import { Route } from '@angular/router';
import { authGuard } from '@bh/web/shared/application';
import { ShellComponent } from './components/shell.component';

export const webCatalogPresentationRoutes: Route[] = [
  {
    path: 'catalog',
    loadComponent: () => ShellComponent,
    canMatch: [authGuard]
  }
];
