import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ShopDetail } from "./shops_detail.entity";
import { ShopsDetailRepository } from "./shops_detail.repository";

@Injectable()
export class ShopsDetailService {
  constructor(
    @InjectRepository(ShopDetail)
    private shopDetailRepository: ShopsDetailRepository) {}

  async createShopDetail(body: any) {
    const {
      shop_id,
      shop_name,
      address,
      detailed_address,
      ceo_name,
      ceo_phone,
      business_number,
    } = body;

    const shop_detail = await this.shopDetailRepository.save(body);
    return body;
  }
}
