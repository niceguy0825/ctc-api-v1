import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShopsController } from "./shops.controller";
import { Shop } from "./shops.entity";
import { ShopsRepository } from "./shops.repository";
import { ShopsService } from "./shops.service";

@Module({
  imports: [TypeOrmModule.forFeature([Shop])],
  controllers: [ShopsController],
  providers: [ShopsService],
})
export class ShopsModule {}
