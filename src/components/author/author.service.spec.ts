import { Test, TestingModule } from '@nestjs/testing';
import { AuthorRepository } from '../../cross-cutting/author.repo';
import { Repository } from 'typeorm';
import { AuthorService } from './author.service';

describe('AuthorService', () => {
  let service: AuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorService,AuthorRepository,Repository],
    }).compile();

    service =await module.resolve(AuthorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
