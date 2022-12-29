import { IsNotEmpty } from "class-validator";
import { Shop } from "src/shops/shops.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "products" })
export class Products {
  @ManyToOne(() => Shop, (shop) => shop.products)
  @JoinColumn({ name: "shop_id" })
  shop: Shop;

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  shop_id: number;

  @Column()
  type: string;

  @Column()
  main_img: string;

  @Column()
  product_name: string;

  @Column({ array: true })
  product_color: string;

  @Column()
  des_title: string;

  @Column()
  des_description: string;

  @Column({ array: true })
  des_keyword: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
