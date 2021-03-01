
import { ArticleModel } from "../models/article.model";
import { IRepository } from "./IRepository";
import { Article } from "../entites/article.entity";
import { UpdateResult } from "typeorm";

export interface IArticleRepository extends IRepository<Article>{

    find(atricle: ArticleModel):Promise<Article>;

    addComment(articleId: number , comment: string):Promise<UpdateResult>;

    thumbUp(articleId: number):Promise<UpdateResult>;

}