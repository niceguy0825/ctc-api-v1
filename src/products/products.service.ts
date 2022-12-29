import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Shop } from "src/shops/shops.entity";
import { Like, Repository } from "typeorm";
import {
  RegisterProductRequestDto,
  UpdateProductRequestDto,
} from "./dto/products.dto";
import { Products } from "./products.entity";
import { Request } from "express";

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

  async getProductByWord(request: Request) {
    const { keyword } = request.query;
    const product = await this.productsRepository.query(
      `SELECT * FROM products WHERE '${keyword}' = ANY(des_keyword) OR product_name LIKE '%${keyword}%'`
    );

    return product;
  }

  async updateProduct(body: UpdateProductRequestDto) {
    const { id } = body;

    const updateProduct = await this.productsRepository.save(body);

    return updateProduct;
  }
}
