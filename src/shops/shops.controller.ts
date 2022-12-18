import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CurrentUser } from "src/common/decorator/user.decorators";
import { JwtAuthGuard } from "src/users/auth/local.strategy";
import { Users } from "src/users/users.entity";
import { ShopsService } from "./shops.service";

@ApiTags("Shops")
@Controller("shops")
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @ApiOperation({ summary: "판매점 신규등록" })
  @UseGuards(JwtAuthGuard)
  @Post()
  async createShop(@CurrentUser() user: Users, @Body() body: any) {
    return await this.shopsService.createShop(user, body);
  }

  @ApiOperation({ summary: "판매점 전체조회" })
  @Get()
  async getAll() {
    return await this.shopsService.getAll();
  }

  @ApiOperation({ summary: "특정 판매점 조회" })
  @Get('/:id')
  async getOneByShopId(@Param('id') id: number) {
    return await this.shopsService.getOne(id);
  }
}
