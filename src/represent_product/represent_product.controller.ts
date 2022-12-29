import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RepresentProductRequestDto } from './dto/represent_product.dto';
import { RepresentProductService } from './represent_product.service';

@Controller('represent_product')
export class RepresentProductController {
    constructor(private readonly representProductService: RepresentProductService) {}

    @ApiOperation({ summary: "판매점 상세등록" })
    @ApiResponse({
        status: 200,
        description: "Success",
        type: RepresentProductRequestDto,
    })
    @Post()
    async createShopDetail(@Body() body: RepresentProductRequestDto) {
        return await this.representProductService.createRepresentProduct(body);
    }
}
