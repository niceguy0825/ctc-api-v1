import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { CurrentUser } from "src/common/decorator/user.decorators";
import { AuthService } from "./auth.service";
import {
  AuthCreateDto,
  AuthLoginDto,
  CurrentMemberRequestDto,
  ReadOnlyAuthDto,
} from "./dto/auth.dto";
import { JwtAuthGuard } from "./jwt.guard";
import { User } from "./user.entity";

@ApiTags("계정")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBearerAuth("access-token")
  @ApiResponse({
    status: 200,
    description: "success",
    type: ReadOnlyAuthDto,
  })
  @ApiOperation({ summary: "현재 유저 정보" })
  @UseGuards(JwtAuthGuard)
  @Get("current")
  async getCurrentMember(@CurrentUser() user: User) {
    return await this.authService.getCurrentMember(user);
  }

  @ApiOperation({ summary: "회원 가입" })
  @Post("/signup")
  signUp(@Body() body: AuthCreateDto) {
    return this.authService.signUp(body);
  }

  @ApiOperation({ summary: "로그인" })
  @ApiResponse({
    status: 200,
    description: "success",
    type: CurrentMemberRequestDto,
  })
  @Post("signin")
  signIn(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.signIn(authLoginDto);
  }
}
