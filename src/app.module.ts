import { UserProfileEntity } from './tables/userprofile/entity/userprofile.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableModule } from './tables/table.module';
import { CompanyEntity } from './tables/company/entity/company.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'test.cowav2yymmkc.ap-south-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'adminJoe',
      database: 'linkedIn',
      entities: [CompanyEntity, UserProfileEntity],
      synchronize: true,
    }),
    TableModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
