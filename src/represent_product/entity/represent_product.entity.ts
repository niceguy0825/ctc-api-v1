import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "represent_product" })
export class RepresentProduct {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  sub_title: string;

  @Column()
  main_img: string;

  @Column({ array: true })
  sub_img: string;
}
