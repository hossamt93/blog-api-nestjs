import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorModel } from '../../models/author.model';
import { InsertResult } from 'typeorm';
import { AuthorService } from './author.service';
import { Author } from '../../entites/author.entity';

@Controller('author')
@ApiTags('Author')
export class AuthorController {

    /**
     *
     */
    constructor(private readonly _authorService:AuthorService) {
    }


    @Post()
    public async post(@Body()author:AuthorModel):Promise<InsertResult>{
        return await this._authorService.insertNewAthor(author);
    }

    @Get()
    public async get():Promise<Author[]>{
        return await this._authorService.getAllAuthors();
    }

    @Get(':id')
    public async getById(@Param('id')id: number):Promise<Author>{
        return await this._authorService.getById(id);
    }
}
