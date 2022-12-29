import { ApiProperty } from "@nestjs/swagger";
import { Shop } from "src/shops/shops.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
export class Users {
  @ApiProperty({
    example: 13,
  })
  @PrimaryGeneratedColumn() id: number;
  @OneToOne(() => Shop, (shop) => shop.user) shop: Shop;

  @ApiProperty({
    example: "10049223",
  })
  @Column()
  uid: string;
  
  @ApiProperty({
    example: "홍길동",
  })
  @Column()
  name: string;

  @ApiProperty({
    example: "M",
  })
  @Column()
  gender: string;

  @ApiProperty({
    example: "1988-11-08",
  })
  @Column()
  date_of_birth: string;

  @ApiProperty({
    example: "01012345678",
  })
  @Column()
  phone: string;

  @ApiProperty({
    example: "닉네임",
  })
  @Column()
  nickname: string;

  @ApiProperty({
    example: "kakao",
  })
  @Column()
  type: string;

  @ApiProperty({
    example: "test@email.com",
  })
  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
