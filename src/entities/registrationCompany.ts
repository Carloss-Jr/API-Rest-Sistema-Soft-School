import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { RegistrationEmployer } from './registrationEmployer';

@Entity("tab_companies")
export class RegistrationCompany extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column()
  cnpj: String;

  @Column()
  email: String;

  @Column()
  password_hash: String;

  @Column()
  is_company: Boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => RegistrationEmployer, emp => emp.name, { cascade: true, eager: true })
  employers: RegistrationEmployer[]
}