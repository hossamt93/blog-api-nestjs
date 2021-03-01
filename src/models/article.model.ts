import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class ArticleModel{

    @IsNumber()
    @IsOptional()
    @ApiProperty({type:Number, nullable:true})
    Id?: number;

    @IsString()
    @IsOptional()
    @ApiProperty({type:String, nullable:true})
    Author?: string;
    
    @IsString()
    @IsOptional()
    @ApiProperty({type:String, nullable:true})
    title?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({type:String, nullable:true})
    body?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({type:String, nullable:true})
    comments?: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({type:Number, nullable:true})
    thumpedUp?: number;

}