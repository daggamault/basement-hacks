import { Module } from '@nestjs/common';

import { ApiAgentsApplicationModule } from '@bh/api/agents/application';
import { ApiCartsApplicationModule } from '@bh/api/carts/application';
import { ApiCatalogsApplicationModule } from '@bh/api/catalogs/application';
import { ApiCustomersApplicationModule } from '@bh/api/customers/application';
import { ApiIdentitiesApplicationModule } from '@bh/api/identities/application';
import { ApiOrdersApplicationModule } from '@bh/api/orders/application';
import { ApiProductsApplicationModule } from '@bh/api/products/application';

@Module({
  imports: [
    ApiAgentsApplicationModule,
    ApiCartsApplicationModule,
    ApiCatalogsApplicationModule,
    ApiCustomersApplicationModule,
    ApiIdentitiesApplicationModule,
    ApiOrdersApplicationModule,
    ApiProductsApplicationModule
  ]
})
export class AppModule {}
