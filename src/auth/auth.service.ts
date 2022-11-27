import {
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { AuthCreateDto, AuthLoginDto } from "./dto/auth.dto";
import { UserRepository } from "./user.repository";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signUp(body: AuthCreateDto) {
    const { uid } = body;
    const unique = await this.userRepository.findOne({ uid });

    if (unique === undefined) {
      await this.userRepository.save({ ...body });
    } else {
      throw new UnauthorizedException("이미 존재하는 아이디입니다");
    }
  }

  async signIn(authLoginDto: AuthLoginDto) {
    const { uid } = authLoginDto;

    const user = await this.userRepository.findOne({ uid });

    if (user) {
      const payload = { uid };
      const accessToken = await this.jwtService.sign(payload);
      return {
        token: accessToken,
      };
    } else {
      throw new UnauthorizedException("login failed");
    }
  }

  async getCurrentMember(user: User) {
    const member = await this.userRepository.findOne({
      where: {
        uid: user.uid,
      },
    });
    return member;
  }
}