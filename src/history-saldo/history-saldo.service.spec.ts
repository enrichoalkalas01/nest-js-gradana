import { Test, TestingModule } from '@nestjs/testing';
import { HistorySaldoService } from './history-saldo.service';

describe('HistorySaldoService', () => {
  let service: HistorySaldoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorySaldoService],
    }).compile();

    service = module.get<HistorySaldoService>(HistorySaldoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
