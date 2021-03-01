import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IArticleRepository } from "../contracts/IRepository.article";
import { Article } from "../entites/article.entity";
import { ArticleModel } from "../models/article.model";
import { InsertResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class ArticleRepository implements IArticleRepository{

    /**
     *
     */
    constructor(private readonly _articleRep:Repository<Article>) {
    }

    find(atricle: ArticleModel): Promise<Article> {
       return this._articleRep.findOne({where:[{title:atricle.title} , {Author: atricle.Author}]});
    }
    addComment(articleId: number , comment: string): Promise<UpdateResult> {
        comment = ','+comment;
        return this._articleRep.query(`update article set comments = CONCAT(comments,'${comment}') where id=${articleId}`);
    }
    thumbUp(articleId: number): Promise<UpdateResult> {
        return  this._articleRep.query(`update article set thumpedUp = thumpedUp+1 where id =${articleId}`);
    }
    findById(Id: number): Promise<Article> {
        return this._articleRep.findOne({where:{Id:Id }});
    }
    findAll(): Promise<Article[]> {
       return this._articleRep.find({order:{thumpedUp: 'DESC'}});
    }
    insert(entity: Article): Promise<InsertResult> {
        return this._articleRep.insert(entity);
    }

}