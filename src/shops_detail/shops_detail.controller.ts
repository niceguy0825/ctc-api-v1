import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ShopsDetailService } from "./shops_detail.service";

@ApiTags("Shops_detail")
@Controller("shops_detail")
export class ShopsDetailController {
  constructor(private readonly shopDetailService: ShopsDetailService) {}

  @Post()
  async createShopDetail(@Body() body: any) {
    return await this.shopDetailService.createShopDetail(body);
  }
}
