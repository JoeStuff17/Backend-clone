import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from './entity/company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';


@Injectable()
export class CompanyService {
    constructor(@InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>){
        
    }
    private company: CompanyEntity [] = [];
   
    createCompany(createCompanyDto: CreateCompanyDto){
       const newCompany = this.companyRepository.create(createCompanyDto);
       return this.companyRepository.save(newCompany);
    }

    findCompany() {
        return this.companyRepository.find({where: {}, order: {'id': 'DESC'}});
    }

    updateCompany(id: number, updateCompanyDetails: UpdateCompanyDto){
      return  this.companyRepository.update({id},{...updateCompanyDetails}) ;
    }

    deleteCompany(id: number){
        return this.companyRepository.delete({ id });
    }
}
