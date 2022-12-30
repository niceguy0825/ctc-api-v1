import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Shops_detail_CreateDto } from "./dto/shops_detail.create.dto";
import { Shops_detailDto,  } from "./dto/shops_detail.dto";
import { ShopsDetailService } from "./shops_detail.service";

@ApiTags("판매점 상세 정보")
@Controller("shops_detail")
export class ShopsDetailController {
  constructor(private readonly shopDetailService: ShopsDetailService) {}

  @ApiOperation({ summary: "판매점 상세등록" })
  @ApiResponse({
    status: 200,
    description: "Success",
    type: Shops_detailDto,
  })
  @Post()
  async createShopDetail(@Body() body: Shops_detail_CreateDto) {
    return await this.shopDetailService.createShopDetail(body);
  }
}
