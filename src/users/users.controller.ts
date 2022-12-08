import { Body, Controller, Get, Param, Post, UseGuards, ValidationPipe } from "@nestjs/common";
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

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers(){
    return await this.usersService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get("/:user_id")
  async getUser(@Param("user_id") user_id: number){
    return await this.usersService.getUser(user_id);
  }
}
