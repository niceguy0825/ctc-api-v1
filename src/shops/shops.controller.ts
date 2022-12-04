import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CurrentUser } from "src/common/decorator/user.decorators";
import { JwtAuthGuard } from "src/users/auth/local.strategy";
import { Users } from "src/users/users.entity";
import { ShopsService } from "./shops.service";

@Controller("shops")
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createShop(
    @CurrentUser() user: Users,
    @Body() body: any) {
    return await this.shopsService.createShop(user, body);
  }

  @Get()
  async getAll(){
    return await this.shopsService.getAll();
  }
}
