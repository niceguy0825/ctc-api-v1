import { Body, Controller, Get, Post } from "@nestjs/common";
import { ShopsService } from "./shops.service";

@Controller("shops")
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}
  @Post()
  async createShop(@Body() body: any) {
    return await this.shopsService.createShop(body);
  }

  @Get()
  async getAll(){
    return await this.shopsService.getAll();
  }
}
