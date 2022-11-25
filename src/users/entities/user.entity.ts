import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userName: string;

  @Column()
  LastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;
}
