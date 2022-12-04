import { Body, Controller, Post } from '@nestjs/common';
import { ShopsDetailService } from './shops_detail.service';

@Controller('shops_detail')
export class ShopsDetailController {
    constructor(private readonly shopDetailService: ShopsDetailService){}

    @Post()
    async createShopDetail(
        @Body() body: any){
        return await this.shopDetailService.createShopDetail(body);
    }
}
