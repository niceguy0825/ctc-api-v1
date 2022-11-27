import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Shop } from "./shops.entity";
import { ShopsRepository } from "./shops.repository";

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop)
    private shopsRepository: ShopsRepository
  ) {}

  async createShop(body: any) {
    const {
      shop_info,
      youtube_link,
      notice,
      business_time,
      latitude,
      longitude,
      shop_picture,
    } = body;

    const shop = this.shopsRepository.create({
      shop_info,
      youtube_link,
      notice,
      business_time,
      latitude,
      longitude,
      shop_picture,
    });
    await this.shopsRepository.save(shop);

    return shop;
  }

  async getAll() {
    const shops = this.shopsRepository.find({ relations: ['shop_detail'] });
    return shops;
  }
}
