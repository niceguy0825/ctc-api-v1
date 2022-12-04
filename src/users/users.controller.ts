import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { CurrentUser } from "src/common/decorator/user.decorators";
import { JwtAuthGuard } from "./auth/local.strategy";
import { SignUpDto } from "./dto/users.dto";
import { Users } from "./users.entity";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("signup")
  async signUp(@Body(ValidationPipe) body: SignUpDto) {
    return await this.usersService.signUp(body);
  }

  @Post("signin")
  async signIn(@Body() body: any) {
    return await this.usersService.signIn(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get("current")
  async getCurrentUser(@CurrentUser() user: Users){
    return await this.usersService.getCurrentUser(user)
  }
}
