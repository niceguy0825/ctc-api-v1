import { PickType } from "@nestjs/swagger";
import { Shops_detailDto } from "./shops_detail.dto";

export class Shops_detail_CreateDto extends PickType(Shops_detailDto, [
  "shop_id",
  "shop_name",
  "youtube_link",
  "shop_gif",
  "business_time",
  "shop_picture",
  "notice",
]) {}
