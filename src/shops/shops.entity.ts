import { Products } from "src/products/products.entity";
import { ShopDetail } from "src/shops_detail/shops_detail.entity";
import { Users } from "src/users/users.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "shops" })
export class Shop {
  @OneToOne(() => ShopDetail, (shop_detail) => shop_detail.shop)
  shop_detail: ShopDetail;

  @OneToOne(() => Users, (user) => user.shop)
  @JoinColumn({ name: "user_id" })
  user: Users;

  @OneToMany(() => Products, (product) => product.shop)
  products: Products;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
