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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeORMConfig),
    ShopsModule,
    ShopsDetailModule,
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
