import { PickType } from "@nestjs/swagger";
import { RepresentProduct } from "../entity/represent_product.entity";

export class RepresentProductRequestDto extends PickType(RepresentProduct, [
  'title',
  'sub_title',
  'main_img',
  'sub_img',
]){}