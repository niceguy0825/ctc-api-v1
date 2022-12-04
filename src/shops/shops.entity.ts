import { ShopDetail } from "src/shops_detail/shops_detail.entity";
import { Users } from "src/users/users.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "shops" })
export class Shop {
  @OneToOne(() => ShopDetail, (shop_detail) => shop_detail.shop)
  shop_detail: ShopDetail;

  @OneToOne(() => Users, (user) => user.shop)
  @JoinColumn({ name: "user_id" })
  user: Users;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shop_name: string;

  @Column()
  address: string;

  @Column()
  detailed_address: string;

  @Column()
  ceo_name: string;

  @Column()
  business_license_number: string;

  @Column()
  manager_name: string;

  @Column()
  manager_number: string;

  @Column()
  email: string;

  @Column()
  user_id: number;
}
