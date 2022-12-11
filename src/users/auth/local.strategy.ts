import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard, PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "../users.entity";
import { Repository } from "typeorm";

type Payload = {
  uid: string;
  sub: number;
};

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {}

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY,
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) {
    const user = await this.usersRepository.findOne({
      where: { id: payload.sub },
    });
    if (user) {
      return user;
    } else {
      throw new UnauthorizedException("접근 오류");
    }
  }
}
