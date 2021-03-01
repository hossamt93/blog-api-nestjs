import {Injectable } from '@nestjs/common';
import { ArticleRepository } from '../../cross-cutting/article.repo';
import { Article } from '../../entites/article.entity';
import { ArticleModel } from '../../models/article.model';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArticleService {
    private readonly _articleRepo: ArticleRepository;
    constructor(@InjectRepository(Article)private readonly _article:Repository<Article>) {
        this._articleRepo = new ArticleRepository(this._article);
    }

    public insertNewArticle(article: ArticleModel):Promise<InsertResult>{
        let articleEntity = new Article();
        articleEntity ={
            Author: article.Author,
            body: article.body,
            comments:article.comments,
            thumpedUp: article.thumpedUp,
            title:article.title
        };
        return this._articleRepo.insert(articleEntity);
    }

    public getAllArticles():Promise<Article[]>{
        return this._articleRepo.findAll();
    }

    public getById(id: number):Promise<Article>{
        if(id<1)
            throw new Error('INvalid_Id');

        return this._articleRepo.findById(id);
    }

    thumbUp(id: number):Promise<UpdateResult> {
        return this._articleRepo.thumbUp(id);
    }

    comment(id: number, comment: string): Promise<UpdateResult> {
       return this._articleRepo.addComment(id,comment);
    }

    search(title: string,author:string):Promise<Article>{
        return this._articleRepo.find({title:title,Author:author});
    }
}
