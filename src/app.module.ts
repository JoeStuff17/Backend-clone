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
      host: '51.81.151.210',
      port: 3306,
      username: 'axiomcon_jothiraj',
      password: '^;PNRpP~nvQn',
      database: 'axiomcon_jothiraj',
      entities: [CompanyEntity, UserProfileEntity],
      synchronize: true,
    }),
    TableModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
