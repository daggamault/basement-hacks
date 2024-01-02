import { ApiProperty, Expose } from '../decorator-hacks/api-decorators';
import { BaseEntity, CreateOmits, UpdateOmits } from './shared.dtos';

export interface User extends BaseEntity<string> {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

export class UserDto implements Omit<User, 'password' | 'salt'> {
  @ApiProperty()
  @Expose()
  id!: string;
  @ApiProperty()
  @Expose()
  username!: string;
  @ApiProperty()
  @Expose()
  firstName!: string;
  @ApiProperty()
  @Expose()
  lastName!: string;
  @ApiProperty()
  @Expose()
  email!: string;
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

export class UserCredentialsDto {
  @ApiProperty()
  @Expose()
  username!: string;
  @ApiProperty()
  @Expose()
  password!: string;
}

export class CreateUserDto implements Omit<User, CreateOmits> {
  @ApiProperty()
  @Expose()
  username!: string;
  @ApiProperty()
  @Expose()
  password!: string;
  @ApiProperty()
  @Expose()
  firstName!: string;
  @ApiProperty()
  @Expose()
  lastName!: string;
  @ApiProperty()
  @Expose()
  email!: string;
}

export class UpdateUserDto implements Omit<User, UpdateOmits> {
  @ApiProperty()
  @Expose()
  id!: string;
  @ApiProperty()
  @Expose()
  username!: string;
  @ApiProperty()
  @Expose()
  password!: string;
  @ApiProperty()
  @Expose()
  firstName!: string;
  @ApiProperty()
  @Expose()
  lastName!: string;
  @ApiProperty()
  @Expose()
  email!: string;
}
