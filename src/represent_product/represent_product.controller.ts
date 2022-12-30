import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RepresentProductRequestDto } from './dto/represent_product.dto';
import { RepresentProductService } from './represent_product.service';

@ApiTags("[랜딩]대표제품 정보")
@Controller('represent_product')
export class RepresentProductController {
    constructor(private readonly representProductService: RepresentProductService) {}

    @ApiOperation({ summary: "전체 대표제품 조회" })
    @Get()
    async getAllRepresentProduct() {
        return await this.representProductService.getAllRepresentProduct();
    }
    
    @ApiOperation({ summary: "판매점 상세등록" })
    @ApiResponse({
        status: 200,
        description: "Success",
        type: RepresentProductRequestDto,
    })
    @Post()
    async createRepresentProduct(@Body() body: RepresentProductRequestDto) {
        return await this.representProductService.createRepresentProduct(body);
    }
}
