import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { ShopDetail } from "../shops_detail.entity";

export class Shops_detailDto extends ShopDetail {}
