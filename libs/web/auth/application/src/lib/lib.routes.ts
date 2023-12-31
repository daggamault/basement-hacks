import { Route } from '@angular/router';
import { ShellComponent } from './components/shell.component';

export const webAuthApplicationRoutes: Route[] = [
  {
    path: 'auth',
    loadComponent: () => ShellComponent
  }
];
