import { Shop } from "src/shops/shops.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "users" })
export class Users {
  @PrimaryGeneratedColumn() id: number;
  @OneToOne(() => Shop, (shop) => shop.user) shop: Shop;
  @Column() uid: string;
  @Column() name: string;
  @Column() gender: string;
  @Column() date_of_birth: string;
  @Column() phone: string;
  @Column() nickname: string;
  @Column() type: string;
  @Column() email: string;
}
