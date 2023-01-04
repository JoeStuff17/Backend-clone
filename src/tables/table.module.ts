import { UserProfileEntity } from './userprofile/entity/userprofile.entity';
import { UserprofileService } from './userprofile/userprofile.service';
import { CompanyController } from './company/company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CompanyEntity } from './company/entity/company.entity';
import { CompanyService } from './company/company.service';
import { UserprofileController } from './userprofile/userprofile.controller';

@Module({
    controllers: [CompanyController, UserprofileController],

    providers: [CompanyService, UserprofileService],

    imports: [TypeOrmModule.forFeature([CompanyEntity, UserProfileEntity])],
})
export class TableModule { }
