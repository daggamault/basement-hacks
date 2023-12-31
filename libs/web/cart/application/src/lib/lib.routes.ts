import { Route } from '@angular/router';
import { authGuard } from '@bh/web/shared/application';
import { ShellComponent } from './components/shell.component';

export const webCartApplicationRoutes: Route[] = [
  {
    path: 'cart',
    loadComponent: () => ShellComponent,
    canMatch: [authGuard]
  }
];
