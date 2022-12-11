import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ShopDetail } from "./shops_detail.entity";

@Injectable()
export class ShopsDetailService {
  constructor(
    @InjectRepository(ShopDetail)
    private shopDetailRepository: Repository<ShopDetail>
  ) {}

  async createShopDetail(body: any) {
    const {
      shop_id,
      shop_name,
      youtube_link,
      shop_gif,
      business_time,
      shop_picture,
      notice,
    } = body;

    const shop_detail = await this.shopDetailRepository.save(body);
    return shop_detail;
  }
}
