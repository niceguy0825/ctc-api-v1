import { Shop } from "src/shops/shops.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'shop_detail' })
export class ShopDetail{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Shop, shop => shop.shop_detail)
    @JoinColumn({ name: 'shop_id' })
    shop: Shop

    @Column()
    shop_id: number;

    @Column()
    shop_name: string;

    @Column()
    address: string;

    @Column()
    detailed_address: string;

    @Column()
    ceo_name: string;

    @Column()
    ceo_phone: string;

    @Column()
    business_number: string;
}