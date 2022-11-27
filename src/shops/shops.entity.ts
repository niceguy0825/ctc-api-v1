import { ShopDetail } from "src/shops_detail/shops_detail.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'shops' })
export class Shop{

  @OneToOne(() => ShopDetail, shop_detail => shop_detail.shop)
  shop_detail: ShopDetail
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shop_info: string;

  @Column()
  youtube_link: string;

  @Column()
  business_time: string;

  @Column('text',{
    array: true,
    nullable: true
  })
  shop_picture: string[];

  @Column()
  notice: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}
