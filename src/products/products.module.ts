import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from 'src/shops/shops.entity';
import { ProductsController } from './products.controller';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products, Shop])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
