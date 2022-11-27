import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { typeORMConfig } from "./configs/typeorm.config";
import { ShopsModule } from "./shops/shops.module";
import { ConfigModule } from "@nestjs/config"
import { ShopsDetailModule } from './shops_detail/shops_detail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeORMConfig),
    ShopsModule,
    ShopsDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
