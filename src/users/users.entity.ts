import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  uid: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  date_of_birth: string;

  @Column()
  phone: string;

  @Column()
  nickname: string;

  @Column()
  type: string;

  @Column()
  email: string;
}
