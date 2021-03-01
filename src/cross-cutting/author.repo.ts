import { Injectable } from "@nestjs/common";
import { Author } from "../entites/author.entity";
import { InsertResult, Repository } from "typeorm";
import { IAuthorRepository } from "../contracts/IRepository.author";

@Injectable()
export class AuthorRepository implements IAuthorRepository{

    constructor(private readonly _authorRep:Repository<Author>) {     
    }

    findById(Id: number): Promise<Author> {
        return this._authorRep.findOne({where:{Id:Id }});
    }
    findAll(): Promise<Author[]> {
        return this._authorRep.find({});
    }
    insert(entity: Author): Promise<InsertResult> {
        return this._authorRep.insert(entity);
    }

}