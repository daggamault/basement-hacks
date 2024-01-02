import { ApiProperty, Expose } from '../decorator-hacks/api-decorators';
import { BaseEntity, CreateOmits, UpdateOmits } from './shared.dtos';

export enum Resource {
  USERS = 1,
  ROLES = 2
}

export enum Action {
  READ = 1,
  CREATE = 2,
  UPDATE = 3,
  DELETE = 4,
  EXECUTE = 5
}

export interface PermissionDto extends BaseEntity<string> {
  name: string;
  resource: Resource;
  action: Action;
}

export class CreatePermissionDto implements Omit<PermissionDto, CreateOmits> {
  @ApiProperty()
  @Expose()
  name!: string;
  @ApiProperty()
  @Expose()
  resource!: Resource;
  @ApiProperty()
  @Expose()
  action!: Action;
}

export class UpdatePermissionDto implements Omit<PermissionDto, UpdateOmits> {
  @ApiProperty()
  @Expose()
  id!: string;
  @ApiProperty()
  @Expose()
  name!: string;
  @ApiProperty()
  @Expose()
  resource!: Resource;
  @ApiProperty()
  @Expose()
  action!: Action;
}
