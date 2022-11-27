import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity()
@Unique(["uid"])
export class User {
  @ApiProperty({
    example: 15,
    description: "index",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: "2519040432",
    description: "카카오로그인 id",
  })
  @IsNotEmpty({ message: "카카오 로그인을 확인해주세요" })
  @Column()
  uid: string;

  @ApiProperty({
    example: "홍길동",
    description: "실명",
  })
  @IsNotEmpty({ message: "이름을 입력해주세요" })
  @Column()
  name: string;

  @ApiProperty({
    example: "2022-11-20 14:00:22",
    description: "생성날짜",
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    example: "2022-11-21 14:00:22",
    description: "수정날짜",
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({
    example: "2022-12-23 14:00:22",
    description: "삭제날짜",
  })
  @DeleteDateColumn()
  deletedAt: Date;
}
