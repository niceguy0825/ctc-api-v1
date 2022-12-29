import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Influencer } from './entity/influencer.entity';
import { InfluencerController } from './influencer.controller';
import { InfluencerService } from './influencer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Influencer])],
  controllers: [InfluencerController],
  providers: [InfluencerService]
})
export class InfluencerModule {}
