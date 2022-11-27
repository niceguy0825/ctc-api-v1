import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

import { JwtStrategy } from "./jwt.strategy";
import { User } from "./user.entity";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: "Secret1234",
      signOptions: {
        expiresIn: "1y",
      },
    }),
    TypeOrmModule.forFeature([User]), // AuthService에서 UserRepository 사용 가능
  ],
  controllers: [AuthController],
  // JwtStrategy를 Auth 모듈에서 사용 가능
  providers: [AuthService, JwtStrategy], // AuthService에서 UserRepository 사용 등록 해야 함
  exports: [JwtStrategy, PassportModule], // JwtStrategy, PassportModule를 다른 모듈에서 사용할 수 있게 등록
})
export class AuthModule {}
