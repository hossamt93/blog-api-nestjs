import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Author')
export class Author{

    @PrimaryGeneratedColumn()
    Id?: number;

    @Column({type:'nvarchar',name:"name",nullable:false})
    name: string;

    @Column({type:'nvarchar',name:"jobTitle",nullable:false})
    jobTitle: string;
}