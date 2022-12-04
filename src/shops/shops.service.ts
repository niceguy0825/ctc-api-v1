import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/users/users.entity";
import { UsersRepository } from "src/users/users.repository";
import { Repository } from "typeorm";
import { Shop } from "./shops.entity";
import { ShopsRepository } from "./shops.repository";

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop) private shopsRepository: ShopsRepository,
    @InjectRepository(Users) private readonly usersRepository: UsersRepository,
  ) {}

  async createShop(user: Users, body: any) {
    const isExistShop = this.shopsRepository.find({user_id: user.id})
    if(isExistShop){
      throw new UnauthorizedException(
        "이미 등록된 판매점이 존재 합니다."
      )
    }

    const shop = this.shopsRepository.create({user, ...body});
    await this.shopsRepository.save(shop);

    return shop;
  }

  async getAll() {
    const shops = this.shopsRepository.find({ relations: ["shop_detail", "user"] });
    return shops;
  }

}
