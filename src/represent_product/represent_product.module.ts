import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepresentProduct } from './entity/represent_product.entity';
import { RepresentProductController } from './represent_product.controller';
import { RepresentProductService } from './represent_product.service';

@Module({
  imports: [TypeOrmModule.forFeature([RepresentProduct])],
  controllers: [RepresentProductController],
  providers: [RepresentProductService]
})
export class RepresentProductModule {}
