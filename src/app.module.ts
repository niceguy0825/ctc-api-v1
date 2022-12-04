import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { typeORMConfig } from "./configs/typeorm.config";
import { ShopsModule } from "./shops/shops.module";
import { ConfigModule } from "@nestjs/config"
import { ShopsDetailModule } from './shops_detail/shops_detail.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeORMConfig),
    ShopsModule,
    ShopsDetailModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
