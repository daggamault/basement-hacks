import { Route } from '@angular/router';
import { authGuard } from '@bh/web/shared/application';
import { ShellComponent } from './components/shell.component';

export const webAdminApplicationRoutes: Route[] = [
  {
    path: 'admin',
    loadComponent: () => ShellComponent,
    canMatch: [authGuard]
  }
];
