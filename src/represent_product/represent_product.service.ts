import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepresentProduct } from './entity/represent_product.entity';

@Injectable()
export class RepresentProductService {
    constructor(
        @InjectRepository(RepresentProduct)
        private representProductRepository: Repository<RepresentProduct>
    ) {}

    async getAllRepresentProduct() {
        const products = await this.representProductRepository.find({});
        return products;
    }

    async createRepresentProduct(body: any) {
        const {
        title,
        sub_title,
        main_img,
        sub_img,
        } = body;
    
        const represent_product = await this.representProductRepository.save(body);
        return represent_product;
    }
}
