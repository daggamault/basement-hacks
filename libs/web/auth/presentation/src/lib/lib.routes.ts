import { Route } from '@angular/router';
import { authGuard } from '@bh/web/shared/application';
import { ShellComponent } from './components/shell.component';

export const webAuthPresentationRoutes: Route[] = [
  {
    path: 'auth',
    loadComponent: () => ShellComponent,
    canMatch: [authGuard]
  }
];
