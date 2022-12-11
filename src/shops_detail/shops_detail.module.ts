import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShopsDetailController } from "./shops_detail.controller";
import { ShopDetail } from "./shops_detail.entity";
import { ShopsDetailService } from "./shops_detail.service";

@Module({
  imports: [TypeOrmModule.forFeature([ShopDetail])],
  controllers: [ShopsDetailController],
  providers: [ShopsDetailService],
})
export class ShopsDetailModule {}
