import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/users/users.entity";
import { Repository } from "typeorm";
import { Shop } from "./shops.entity";

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop) private shopsRepository: Repository<Shop>,
    @InjectRepository(Users) private readonly usersRepository: Repository<Users>,
  ) {}

  async createShop(user: Users, body: any) {
    const isExistShop = this.shopsRepository.find({where: { user_id: user.id }})
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
    const shops = this.shopsRepository.find({ relations: ["shop_detail", "user", "products"] });
    return shops;
  }

}
