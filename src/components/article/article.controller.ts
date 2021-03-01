import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { query } from 'express';
import { Article } from 'src/entites/article.entity';
import { InsertResult, UpdateResult } from 'typeorm';
import { ArticleModel } from '../../models/article.model';
import { ArticleService } from './article.service';

@Controller('article')
@ApiTags('Article')
export class ArticleController {

    /**
     *
     */
    constructor(private readonly _articleService:ArticleService) {
        
    }

    @Post()
    public async post(@Body()article: ArticleModel):Promise<InsertResult>{
        return await this._articleService.insertNewArticle(article);
    }

    @Get()
    public async get():Promise<Article[]>{
        return await this._articleService.getAllArticles();
    }

    @Get(':id')
    public async getById(@Param('id')id: number):Promise<Article>{
        return await this._articleService.getById(id);
    }

    @Put('thumbUp/:id')
    public async thumbUp(@Param('id')id: number):Promise<UpdateResult>{
        return await this._articleService.thumbUp(id);
    }

    @Put('addComment/:id')
    public async addComment(@Param('id')id: number,@Query('comment')comment: string):Promise<UpdateResult>{
        return await this._articleService.comment(id,comment);
    }

    @Get('search')
    public async search(@Query('title')title: string,@Query('author') author: string):Promise<Article>{
        return await this._articleService.search(title,author)
    }
}
