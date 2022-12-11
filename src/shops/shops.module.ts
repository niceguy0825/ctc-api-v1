import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "src/users/users.entity";
import { ShopsController } from "./shops.controller";
import { Shop } from "./shops.entity";
import { ShopsService } from "./shops.service";

@Module({
  imports: [TypeOrmModule.forFeature([Shop, Users])],
  controllers: [ShopsController],
  providers: [ShopsService],
})
export class ShopsModule {}
