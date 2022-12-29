import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "influencer" })
export class Influencer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  sub_title: string;

  @Column()
  main_img: string;

  @Column()
  user_img: string;

  @Column()
  influencer_title: string;

  @Column()
  user_name: string;

  @Column()
  influencer_type: string;

  @Column()
  shop_name: string;

  @Column()
  shop_reputation: string;

  @Column({ array: true })
  hashtag: string;

}