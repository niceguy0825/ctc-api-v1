import { Test, TestingModule } from '@nestjs/testing';
import { ShopsDetailService } from './shops_detail.service';

describe('ShopsDetailService', () => {
  let service: ShopsDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopsDetailService],
    }).compile();

    service = module.get<ShopsDetailService>(ShopsDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
