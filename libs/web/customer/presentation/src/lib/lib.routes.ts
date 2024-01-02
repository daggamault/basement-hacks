import { Route } from '@angular/router';
import { authGuard } from '@bh/web/shared/application';
import { ShellComponent } from './components/shell.component';

export const webCustomerPresentationRoutes: Route[] = [
  {
    path: 'customer',
    loadComponent: () => ShellComponent,
    canMatch: [authGuard]
  }
];
