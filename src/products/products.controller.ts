import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/users/auth/local.strategy";
import { RegisterProductRequestDto } from "./dto/products.dto";
import { ProductsService } from "./products.service";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async registerProduct(@Body() body: RegisterProductRequestDto) {
    return await this.productsService.registerProduct(body);
  }
}
