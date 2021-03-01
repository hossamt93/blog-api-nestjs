import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Article')
export class Article{

    @PrimaryGeneratedColumn()
    Id?: number;

    @Column({type:'nvarchar',name:"Author",nullable:true})
    Author: string;
    
    @Column({type:'nvarchar',name:"title",nullable:false})
    title: string;

    @Column({type:'nvarchar',name:"body",nullable:false})
    body: string;

    @Column({type:'nvarchar',name:"comments",nullable:true})
    comments: string;

    @Column({type:'int',name:"thumpedUp",nullable:true})
    thumpedUp: number;
}