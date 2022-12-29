import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/users/auth/local.strategy";
import { RegisterProductRequestDto } from "./dto/products.dto";
import { ProductsService } from "./products.service";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: "모든 제품 조회" })
  @Get()
  async getAllProducts() {
    return await this.productsService.getAllProducts();
  }

  @ApiOperation({ summary: "특정 제품 조회" })
  @Get('/:id')
  async getProductById(@Param('id') id: number) {
    return await this.productsService.getProductById(id);
  }

  @ApiOperation({ summary: "제품 등록" })
  @UseGuards(JwtAuthGuard)
  @Post()
  async registerProduct(@Body() body: RegisterProductRequestDto) {
    return await this.productsService.registerProduct(body);
  }
}
