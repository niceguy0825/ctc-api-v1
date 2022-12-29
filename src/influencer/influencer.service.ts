import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InfluencerRequestDto } from './dto/influencer.dto';
import { Influencer } from './entity/influencer.entity';

@Injectable()
export class InfluencerService {
    constructor(
        @InjectRepository(Influencer)
        private influenceRepository: Repository<Influencer>
    ) {}

    async createInfluencer(body: InfluencerRequestDto) {
        const {
            title,
            sub_title,
            main_img,
            user_img,
            influencer_title,
            user_name,
            influencer_type,
            shop_name,
            shop_reputation,
            hashtag
        } = body;
    
        const influencer = await this.influenceRepository.save(body);
        return influencer;
    }
}
