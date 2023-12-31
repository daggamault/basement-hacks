import { Route } from '@angular/router';
import { webAdminApplicationRoutes } from '@bh/web/admin/application';
import { webAuthApplicationRoutes } from '@bh/web/auth/application';
import { webCartApplicationRoutes } from '@bh/web/cart/application';
import { webCatalogApplicationRoutes } from '@bh/web/catalog/application';
import { webCustomerApplicationRoutes } from '@bh/web/customer/application';

export const appRoutes: Route[] = [
  ...webAdminApplicationRoutes,
  ...webAuthApplicationRoutes,
  ...webCartApplicationRoutes,
  ...webCatalogApplicationRoutes,
  ...webCustomerApplicationRoutes,
  {
    path: '**',
    redirectTo: 'customer',
    pathMatch: 'full'
  }
];
