import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InfluencerRequestDto } from './dto/influencer.dto';
import { InfluencerService } from './influencer.service';

@ApiTags("인플루언스 정보")
@Controller('influencer')
export class InfluencerController {
    constructor(private readonly influenceService: InfluencerService) {}
    
    @ApiOperation({ summary: "전체 인플루언서 조회" })
    @Get()
    async getAllInfluencer() {
        return await this.influenceService.getAllinfluencer();
    }
    
    @ApiOperation({ summary: "인플루언스 등록" })
    @ApiResponse({
        status: 200,
        description: "Success",
        type: InfluencerRequestDto,
    })
    @Post()
    async createInfluence(@Body() body: InfluencerRequestDto) {
        return await this.influenceService.createInfluencer(body);
    }
}
