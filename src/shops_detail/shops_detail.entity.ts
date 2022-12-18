import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { Shop } from "src/shops/shops.entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "shop_detail" })
export class ShopDetail {
  @ApiProperty({
    example: 11,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Shop, (shop) => shop.shop_detail)
  @JoinColumn({ name: "shop_id" })
  shop: Shop;

  @ApiProperty({
    example: 13,
  })
  @IsString()
  @IsNotEmpty()
  @Column()
  shop_id: number;

  @ApiProperty({
    example: "xx 판매점",
  })
  @IsString()
  @IsNotEmpty()
  @Column()
  shop_name: string;

  @ApiProperty({
    example: "www.youtube.com/examples",
  })
  @IsString()
  @Column()
  youtube_link: string;

  @ApiProperty({
    example: "s3_link1",
  })
  @IsString()
  @Column()
  shop_gif: string;

  @ApiProperty({
    example: "00시~00시까지 운영합니다.",
  })
  @IsString()
  @Column()
  business_time: string;

  @ApiProperty({
    example: ["s3_link2", "s3_link3"],
  })
  @IsArray()
  @Column({ array: true })
  shop_picture: string;

  @ApiProperty({
    example: "00월 00일까지 휴무입니다",
  })
  @IsString()
  @Column()
  notice: string;
}
