import { Module } from '@nestjs/common';

import { ApiAgentsApplicationModule } from '@bh/api/agents/application';
import { ApiCartsApplicationModule } from '@bh/api/carts/application';
import { ApiCatalogsApplicationModule } from '@bh/api/catalogs/application';
import { ApiCustomersApplicationModule } from '@bh/api/customers/application';
import { ApiIdentitiesApplicationModule } from '@bh/api/identities/application';
import { ApiOrdersApplicationModule } from '@bh/api/orders/application';
import { ApiProductsApplicationModule } from '@bh/api/products/application';
import { Env, NodeEnv } from '@bh/api/shared/infrastructure';
import { ignoreCaseCompare } from '@bh/shared/infrastructure';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: ignoreCaseCompare(configService.get(Env.NODE_ENV), NodeEnv.DEV)
            ? 'sqlite'
            : 'mssql',
          host: configService.get(Env.DB_HOST),
          port: configService.get(Env.DB_PORT),
          username: configService.get(Env.DB_USERNAME),
          password: configService.get(Env.DB_PASSWORD),
          database: ignoreCaseCompare(
            configService.get(Env.NODE_ENV),
            NodeEnv.DEV
          )
            ? `tmp/${configService.get(Env.DB_NAME)}.sqlite`
            : configService.get(Env.DB_NAME),
          autoLoadEntities: true,
          synchronize: ignoreCaseCompare(
            configService.get(Env.NODE_ENV),
            NodeEnv.DEV
          )
        } as TypeOrmModuleAsyncOptions)
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => [
        {
          ttl: +configService.get(Env.THROTTLE_TTL),
          limit: +configService.get(Env.THROTTLE_LIMIT)
        }
      ]
    }),
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
