import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'company' })


export class CompanyEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sub: string;

  @Column()
  source: string;

  @Column({nullable:true})
  profileImage: string;

  @Column({nullable:true})
  uploadImage: string;

  @Column({nullable:true})
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}