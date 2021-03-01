import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class AuthorModel{

    @IsNumber()
    @IsOptional()
    @ApiProperty({type:Number, nullable:true})
    Id?: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({type:String, nullable:true})
    name?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({type:String, nullable:true})
    jobTitle?: string;

}