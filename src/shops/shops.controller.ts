import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CurrentUser } from "src/common/decorator/user.decorators";
import { JwtAuthGuard } from "src/users/auth/local.strategy";
import { Users } from "src/users/users.entity";
import { createShopRequestDto, updateShopRequestDto } from "./dto/shops.dto";
import { ShopsService } from "./shops.service";

@ApiTags("판매점 정보")
@Controller("shops")
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @ApiOperation({ summary: "판매점 신규등록" })
  @UseGuards(JwtAuthGuard)
  @Post()
  async createShop(
    @CurrentUser() user: Users,
    @Body() body: createShopRequestDto
  ) {
    return await this.shopsService.createShop(user, body);
  }

  @ApiOperation({ summary: "판매점 전체조회" })
  @Get()
  async getAll() {
    return await this.shopsService.getAll();
  }

  @ApiOperation({ summary: "특정 판매점 조회" })
  @Get("/:id")
  async getOneByShopId(@Param("id") id: number) {
    return await this.shopsService.getOne(id);
  }

  @ApiOperation({ summary: "판매점 정보수정" })
  @UseGuards(JwtAuthGuard)
  @Patch()
  async updateShop(@Body() body: updateShopRequestDto){
    return await this.shopsService.updateShop(body);
  }

  @ApiOperation({ summary: "판매점 삭제" })
  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  async deleteShop(@Param("id") id: number){
    return await this.shopsService.deleteShop(id);
  }
}
