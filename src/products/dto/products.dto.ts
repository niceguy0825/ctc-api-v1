import { PickType } from "@nestjs/swagger";
import { Products } from "../products.entity";

export class RegisterProductRequestDto extends PickType(Products, [
  'shop_id',
  'type',
  'main_img',
  'product_name',
  'product_color',
  'des_title',
  'des_description',
  'des_keyword'
]){}