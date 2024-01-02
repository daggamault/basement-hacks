import { Route } from '@angular/router';
import { webAdminPresentationRoutes } from '@bh/web/admin/presentation';
import { webAuthPresentationRoutes } from '@bh/web/auth/presentation';
import { webCartPresentationRoutes } from '@bh/web/cart/presentation';
import { webCatalogPresentationRoutes } from '@bh/web/catalog/presentation';
import { webCustomerPresentationRoutes } from '@bh/web/customer/presentation';

export const appRoutes: Route[] = [
  ...webAdminPresentationRoutes,
  ...webAuthPresentationRoutes,
  ...webCartPresentationRoutes,
  ...webCatalogPresentationRoutes,
  ...webCustomerPresentationRoutes,
  {
    path: '**',
    redirectTo: 'customer',
    pathMatch: 'full'
  }
];
