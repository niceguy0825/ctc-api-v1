import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalStrategy } from './auth/local.strategy';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([Users]),
  PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1y' },
    }),],
  controllers: [UsersController],
  providers: [UsersService, LocalStrategy]
})
export class UsersModule {}
