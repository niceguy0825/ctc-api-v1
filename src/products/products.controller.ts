import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/users/auth/local.strategy";
import { RegisterProductRequestDto } from "./dto/products.dto";
import { ProductsService } from "./products.service";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: '제품 등록' })
  @UseGuards(JwtAuthGuard)
  @Post()
  async registerProduct(@Body() body: RegisterProductRequestDto) {
    return await this.productsService.registerProduct(body);
  }
}
