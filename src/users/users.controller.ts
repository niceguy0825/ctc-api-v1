import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CurrentUser } from "src/common/decorator/user.decorators";
import { JwtAuthGuard } from "./auth/local.strategy";
import { UsersDto } from "./dto/users.dto";
import { SignInRequestDto } from "./dto/users.signindto";
import { SignUpRequestDto, SignUpResponseDto } from "./dto/users.signup.dto";
import { Users } from "./users.entity";
import { UsersService } from "./users.service";

@ApiTags("Users")
@ApiResponse({
  status: 500,
  description: 'Internal Server Error',
})
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '회원가입' })
  @ApiResponse({
    status: 201,
    description: 'Success',
    type: SignUpResponseDto,
  })
  @Post("signup")
  async signUp(@Body(ValidationPipe) body: SignUpRequestDto) {
    return await this.usersService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @ApiResponse({
    status: 201,
    description: 'Success',
    schema: {
      type: 'json',
      example: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp',
      },
    },
  })
  @Post("signin")
  async signIn(@Body() body: SignInRequestDto) {
    return await this.usersService.signIn(body);
  }

  @ApiOperation({ summary: '현재 유저 조회' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UsersDto,
  })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get("current")
  async getCurrentUser(@CurrentUser() user: Users) {
    return await this.usersService.getCurrentUser(user);
  }

  @ApiOperation({ summary: '모든 유저 조회' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: [UsersDto],
  })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: '특정 유저 조회' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UsersDto,
  })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Get("/:user_id")
  async getUser(@Param("user_id") user_id: number) {
    return await this.usersService.getUser(user_id);
  }
}
