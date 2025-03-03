import { Test, TestingModule } from '@nestjs/testing';
import { Kpx } from './kpx';

describe('Kpx', () => {
  let provider: Kpx;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Kpx],
    }).compile();

    provider = module.get<Kpx>(Kpx);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
