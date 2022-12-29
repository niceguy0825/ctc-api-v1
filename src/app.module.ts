import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { typeORMConfig } from "./configs/typeorm.config";
import { ShopsModule } from "./shops/shops.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ShopsDetailModule } from "./shops_detail/shops_detail.module";
import { UsersModule } from "./users/users.module";
import { ProductsModule } from "./products/products.module";
import { LoggerMiddleware } from "./common/middlewares/logger.middleware";
import { RepresentProductModule } from './represent_product/represent_product.module';
import { InfluencerModule } from "./influencer/influencer.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeORMConfig),
    ShopsModule,
    ShopsDetailModule,
    UsersModule,
    ProductsModule,
    RepresentProductModule,
    InfluencerModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
