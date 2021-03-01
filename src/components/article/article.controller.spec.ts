import { Test, TestingModule } from '@nestjs/testing';
import { getConnectionName, getRepositoryToken } from '@nestjs/typeorm';
import { Article } from '../../entites/article.entity';
import { Connection, createConnection, getConnection, getRepository, Repository } from 'typeorm';
import { ArticleRepository } from '../../cross-cutting/article.repo';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

describe('ArticleController', () => {
  let controller: ArticleController;
  let service: ArticleService
  let repository: Repository<Article>;
  let connection: Connection

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers:[ArticleService,ArticleRepository,{provide :getRepositoryToken(Article),useClass: Repository}]
    }).compile();

    if(!connection){
    connection = await createConnection({
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
      name:'testArticleController'
    });
  }
    
    repository = getRepository(Article,'testArticleController');
    service = new ArticleService(repository);

    controller =new ArticleController(service);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


 describe("findOne",()=>{
   it("should return null for no db",async ()=> {
     expect(await controller.getById(20)).toBe(undefined)
   })

 });
});
