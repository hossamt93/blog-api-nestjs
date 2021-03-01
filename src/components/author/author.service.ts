import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../../entites/author.entity';
import { InsertResult, Repository } from 'typeorm';
import { AuthorRepository } from '../../cross-cutting/author.repo';
import { AuthorModel } from '../../models/author.model';

@Injectable()
export class AuthorService {

    private readonly _authorRepo: AuthorRepository;
    constructor(@InjectRepository(Author)private readonly _author:Repository<Author>) {
        this._authorRepo = new AuthorRepository(this._author);
    }

    public insertNewAthor(author: AuthorModel):Promise<InsertResult>{
        let authorEntity = new Author();
        authorEntity ={
           jobTitle: author.jobTitle,
           name: author.name
        };
        return this._authorRepo.insert(authorEntity);
    }

    public getAllAuthors():Promise<Author[]>{
        return this._authorRepo.findAll();
    }

    public getById(id: number):Promise<Author>{
        if(id<1)
            throw new Error('INvalid_Id');

        return this._authorRepo.findById(id);
    }

}
