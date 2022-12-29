import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/users/auth/local.strategy";
import {
  RegisterProductRequestDto,
  UpdateProductRequestDto,
} from "./dto/products.dto";
import { ProductsService } from "./products.service";
import { Request } from "express";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: "모든 제품 조회" })
  @Get()
  async getAllProducts() {
    return await this.productsService.getAllProducts();
  }

  @ApiOperation({ summary: "키워드로 제품 조회" })
  @Get("/search")
  async getProductByWord(@Req() request: Request) {
    return await this.productsService.getProductByWord(request);
  }

  @ApiOperation({ summary: "특정 제품 조회" })
  @Get("/:id")
  async getProductById(@Param("id") id: number) {
    return await this.productsService.getProductById(id);
  }

  @ApiOperation({ summary: "제품 등록" })
  @UseGuards(JwtAuthGuard)
  @Post()
  async registerProduct(@Body() body: RegisterProductRequestDto) {
    return await this.productsService.registerProduct(body);
  }

  @ApiOperation({ summary: "제품 수정" })
  @Patch()
  async updateProduct(@Body() body: UpdateProductRequestDto) {
    return await this.productsService.updateProduct(body);
  }
}
