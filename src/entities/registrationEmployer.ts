import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { RegistrationCompany } from './registrationCompany';

@Entity("tab_employers")
export class RegistrationEmployer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column()
  cpf: String;

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

  @ManyToOne(() => RegistrationCompany, company => company.employers,)

  @JoinColumn({ name: "id_company" })
  id_company: RegistrationCompany
}