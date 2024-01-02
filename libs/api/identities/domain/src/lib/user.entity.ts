import { User } from '@bh/shared/domain';
import { genSalt, hash } from 'bcryptjs';
import { Expose } from 'class-transformer';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('users')
export class UserEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  id!: string;
  @Column({ unique: true })
  @Expose()
  username!: string;
  @Column()
  password!: string;
  @Column()
  salt!: string;
  @Column({ name: 'first_name' })
  @Expose()
  firstName!: string;
  @Column({ name: 'last_name' })
  @Expose()
  lastName!: string;
  @Column({ unique: true })
  email!: string;
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
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.salt = await genSalt();
      this.password = await hash(this.password, this.salt);
    }
  }
}
