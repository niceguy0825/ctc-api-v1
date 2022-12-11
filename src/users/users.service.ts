import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { LocalStrategy } from "./auth/local.strategy";
import { SignUpDto } from "./dto/users.dto";
import { Users } from "./users.entity";
import { InjectRepository } from "@nestjs/typeorm"

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwt: JwtService
  ) {}

  async signUp(body: any) {
    const { uid, type, name, gender, date_of_birth, phone, nickname, email } =
      body;

    const isExistUid = await this.usersRepository.find({ where: {uid: uid} });
    const isExistPhone = await this.usersRepository.find({ where: {phone: phone} });
    const isExistEmail = await this.usersRepository.find({ where: {email: email} });

    if (isExistUid.length) {
      throw new UnauthorizedException("이미 존재하는 아이디 입니다.");
    }

    if (isExistPhone.length) {
      throw new UnauthorizedException("이미 존재하는 휴대폰번호 입니다.");
    }

    if (isExistEmail.length) {
      throw new UnauthorizedException("이미 존재하는 이메일 입니다.");
    }

    const user = await this.usersRepository.save({
      uid,
      type,
      name,
      gender,
      date_of_birth,
      phone,
      nickname,
      email,
    });

    return user;
  }

  async signIn(body: any) {
    const { uid } = body;
    const user = await this.usersRepository.findOneBy({ uid: uid });

    if (!user) {
      throw new UnauthorizedException("로그인 정보를 확인해주세요.");
    }

    const payload = {
      uid: uid,
      sub: user.id,
    };
    const token = this.jwt.sign(payload);
    return token;
  }

  async getCurrentUser(user: Users) {
    const currentUser = await this.usersRepository.findOne({
      relations: ["shop"],
      where: {
        id: user.id,
      },
    });
    return currentUser;
  }

  async getAllUsers() {
    const getAllUsers = await this.usersRepository.find({});

    return getAllUsers;
  }

  async getUser(user_id: number) {
    const getUser = await this.usersRepository.findOne({
      relations: ["shop"],
      where: {
        id: user_id,
      },
    });
    if(!getUser){
      throw new BadRequestException("유저정보를 확인해주세요.")
    }

    return getUser;
  }
}
