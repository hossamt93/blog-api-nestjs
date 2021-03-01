import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { AuthorRepository } from '../../cross-cutting/author.repo';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';

describe('AuthorController', () => {
  let controller: AuthorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorController],
      providers: [AuthorService,AuthorRepository,Repository]
    }).compile();

    controller = await module.resolve(AuthorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
