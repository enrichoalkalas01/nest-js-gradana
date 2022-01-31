import { Test, TestingModule } from '@nestjs/testing';
import { HistorySaldoController } from './history-saldo.controller';

describe('HistorySaldoController', () => {
  let controller: HistorySaldoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorySaldoController],
    }).compile();

    controller = module.get<HistorySaldoController>(HistorySaldoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
