import { Action, PermissionDto, Resource } from '@bh/shared/domain';
import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('permissions')
export class PermissionEntity implements PermissionDto {
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  id!: string;
  @Column()
  @Expose()
  name!: string;
  @Column({
    type: 'int',
    enum: Resource
  })
  @Expose()
  resource!: Resource;
  @Column({
    type: 'int',
    enum: Action
  })
  @Expose()
  action!: Action;
  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime'
  })
  @Expose()
  createdAt!: Date;
  @Column({ name: 'created_by' })
  @Expose()
  createdBy!: string;
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime'
  })
  @Expose()
  updatedAt!: Date;
  @Column({ name: 'updated_by' })
  @Expose()
  updatedBy!: string;
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'datetime'
  })
  @Expose()
  deletedAt?: Date;
  @Column({ name: 'deleted_by', nullable: true })
  @Expose()
  deletedBy?: string;
}
