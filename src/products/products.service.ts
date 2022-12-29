import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Shop } from "src/shops/shops.entity";
import { Repository } from "typeorm";
import { RegisterProductRequestDto } from "./dto/products.dto";
import { Products } from "./products.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
    @InjectRepository(Shop)
    private shopRepository: Repository<Shop>
  ) {}

  async registerProduct(body: RegisterProductRequestDto) {
    const { shop_id } = body;
    const shop = await this.shopRepository.findOne({
      where: {
        id: shop_id,
      },
    });
    if (!shop) {
      throw new BadRequestException("판매점 정보가 올바르지 않습니다.");
    }
    const product = await this.productsRepository.save(body);
    return product;
  }

  async getAllProducts() {
    const products = await this.productsRepository.find({});
    return products;
  }

  async getProductById(id: number) {
    const product = await this.productsRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!product) {
      throw new BadRequestException("제품정보가 존재하지 않습니다.");
    }
    return product;
  }
}
