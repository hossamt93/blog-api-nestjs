import { Test, TestingModule } from '@nestjs/testing';
import { ArticleRepository } from '../../cross-cutting/article.repo';
import { createConnection, getRepository, Repository } from 'typeorm';
import { ArticleService } from './article.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../../entites/article.entity';

describe('ArticleService', () => {
  let service: ArticleService;
  let repository: Repository<Article>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleService,ArticleRepository,
      {provide :getRepositoryToken(Article),useClass: Repository}],
    }).compile();

    await createConnection({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      database:'blog',
      username: 'sa',
      password: 'P@ssw0rd',
      logging: true,
      synchronize: true,
      entities:  [Article],
      connectionTimeout: 30000,
      name:'testArticleService'
    });

    repository = getRepository(Article,'testArticleService');

    service = new ArticleService(repository);
  });

  describe("findOne",()=>{
    it("should return null for no db",async ()=> {
      expect(await service.getById(20)).toBe(undefined)
    });
  });

});
