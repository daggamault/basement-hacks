import { Role } from '@bh/shared/domain';
import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { PermissionEntity } from './permission.entity';

@Entity('roles')
export class RoleEntity implements Role {
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  id!: string;
  @Column({ unique: true })
  @Expose()
  name!: string;
  @Column()
  @Expose()
  description!: string;
  @ManyToMany(() => PermissionEntity, { cascade: ['insert'] })
  @JoinTable({
    name: 'roles_permissions',
    joinColumn: { name: 'role_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' }
  })
  @Expose()
  permissions!: PermissionEntity[];
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
