import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './components/article/article.module';
import { AuthorModule } from './components/author/author.module';
import {TypeOrmModule} from '@nestjs/typeorm';


@Module({
  imports: [ArticleModule, AuthorModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.HOST,
      port: Number.parseInt(process.env.PORT),
      database: process.env.DATABASE,
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
      logging: true,
      synchronize: true,
      keepConnectionAlive: true,
      entities:  [__dirname + '/entites/*.entity{.ts,.js}'],
      connectionTimeout: 30000,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
