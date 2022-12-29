import { PickType } from "@nestjs/swagger";
import { Influencer } from "../entity/influencer.entity";

export class InfluencerRequestDto extends PickType(Influencer, [
  'title',
  'sub_title',
  'main_img',
  'user_img',
  'influencer_title',
  'user_name',
  'influencer_type',
  'shop_name',
  'shop_reputation',
  'hashtag',
]){}