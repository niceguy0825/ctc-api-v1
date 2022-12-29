import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/users/users.entity";
import { Repository } from "typeorm";
import { createShopRequestDto, updateShopRequestDto } from "./dto/shops.dto";
import { Shop } from "./shops.entity";

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop) private shopsRepository: Repository<Shop>,
    @InjectRepository(Users) private readonly usersRepository: Repository<Users>
  ) {}

  async createShop(user: Users, body: createShopRequestDto) {
    const isExistShop = await this.shopsRepository.findOne({
      where: { user_id: user.id },
    });

    if (isExistShop) {
      throw new UnauthorizedException("이미 등록된 판매점이 존재 합니다.");
    }

    const shop = this.shopsRepository.create({ user, ...body });
    await this.shopsRepository.save(shop);

    return shop;
  }

  async getAll() {
    const shops = this.shopsRepository.find({
      relations: ["shop_detail", "user", "products"],
    });
    return shops;
  }

  async getOne(id: number) {
    const shop = this.shopsRepository.findOne({
      where: {
        id: id,
      },
      relations: ["shop_detail", "user", "products"],
    });
    return shop;
  }

  async updateShop(body: updateShopRequestDto) {
    const shop = this.shopsRepository.findOne({
      where: {
        id: body.id,
      },
    });
    if (!shop) {
      throw new BadRequestException("판매점 정보가 존재하지 않습니다.");
    }
    return await this.shopsRepository.save(body);
  }

  async deleteShop(id: number) {
    const shop = await this.shopsRepository.findOne({
      where: {
        id: id
      }
    })
    return await this.shopsRepository.softRemove(shop);
  }

}
