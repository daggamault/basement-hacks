import { ApiProperty, Expose } from '../decorator-hacks/api-decorators';
import { PermissionDto } from './permissions.dtos';
import { BaseEntity, CreateOmits, UpdateOmits } from './shared.dtos';

export interface Role extends BaseEntity<string> {
  name: string;
  description: string;
  permissions: PermissionDto[];
}

export class RoleDto implements Role {
  @ApiProperty()
  @Expose()
  id!: string;
  @ApiProperty()
  @Expose()
  name!: string;
  @ApiProperty()
  @Expose()
  description!: string;
  @ApiProperty()
  @Expose()
  permissions!: PermissionDto[];
  @ApiProperty()
  @Expose()
  createdAt!: Date;
  @ApiProperty()
  @Expose()
  updatedAt!: Date;
  @ApiProperty()
  @Expose()
  deletedAt?: Date;
  @ApiProperty()
  @Expose()
  createdBy!: string;
  @ApiProperty()
  @Expose()
  updatedBy!: string;
  @ApiProperty()
  @Expose()
  deletedBy?: string;
}

export class CreateRoleDto implements Omit<Role, CreateOmits> {
  @ApiProperty()
  @Expose()
  name!: string;
  @ApiProperty()
  @Expose()
  description!: string;
  @ApiProperty()
  @Expose()
  permissions!: PermissionDto[];
}

export class UpdateRoleDto implements Omit<Role, UpdateOmits> {
  @ApiProperty()
  @Expose()
  id!: string;
  @ApiProperty()
  @Expose()
  name!: string;
  @ApiProperty()
  @Expose()
  description!: string;
  @ApiProperty()
  @Expose()
  permissions!: PermissionDto[];
}
