import { Route } from '@angular/router';
import { authGuard } from '@bh/web/shared/application';
import { ShellComponent } from './components/shell.component';

export const webCustomerApplicationRoutes: Route[] = [
  {
    path: 'customer',
    loadComponent: () => ShellComponent,
    canMatch: [authGuard]
  }
];
