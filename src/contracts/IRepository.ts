import { InsertResult } from "typeorm";

export interface IRepository<T>{

    findById(Id: number):Promise<T>;

    findAll():Promise<T[]>;

    insert(entity:T):Promise<InsertResult>;

}