import { Test, TestingModule } from '@nestjs/testing';
import { ShopsDetailController } from './shops_detail.controller';

describe('ShopsDetailController', () => {
  let controller: ShopsDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopsDetailController],
    }).compile();

    controller = module.get<ShopsDetailController>(ShopsDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
