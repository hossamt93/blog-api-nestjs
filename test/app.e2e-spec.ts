import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ArticleModel } from './../src/models/article.model';
import { AuthorModel } from './../src/models/author.model';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  let article: ArticleModel ={
    Author: 'hossam',
    body: 'hossam taha',
    comments: 'no comment',
    thumpedUp: 0,
    title: 'title'
  }

  let author: AuthorModel={
    jobTitle:'author',
    name:'hossam'
  }

  it('/article/(POST)',() =>{
    return request(app.getHttpServer()).post('/article').send(article).expect(HttpStatus.CREATED)
  });

  it('/article/ (GET)',() =>{
    return request(app.getHttpServer()).get('/article').expect(HttpStatus.OK)
  });

  it('/article/{Id} (GET)',() =>{
    return request(app.getHttpServer()).get('/article/1').expect(HttpStatus.OK)
  });

  it('/article/thumbUp/{id} (PUT)',() =>{
    return request(app.getHttpServer()).put('/article/thumbUp/1').expect(HttpStatus.OK)
  });

  it('/article/addComment/{id} (PUT)',() =>{
    return request(app.getHttpServer()).put('/article/addComment/1?comment=hi').expect(HttpStatus.OK)
  });

  it('/article/search (PUT)',() =>{
    return request(app.getHttpServer()).get('/article?title=title&author=hossam').expect(HttpStatus.OK)
  });
  

  it('/author/(POST)',() =>{
    return request(app.getHttpServer()).post('/author').send(author).expect(HttpStatus.CREATED)
  });
  
  it('/author/ (GET)',() =>{
    return request(app.getHttpServer()).get('/author').expect(HttpStatus.OK)
  });

  it('/author/{Id} (GET)',() =>{
    return request(app.getHttpServer()).get('/author/1').expect(HttpStatus.OK)
  });

});
