import { Repository } from 'typeorm';
import { CompanyService } from './company.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UploadedFile,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';

@Controller('company')
export class CompanyController {

    constructor(private readonly companyService: CompanyService) { }

    @Post()
    @UsePipes(ValidationPipe)
    createCompany(@Body() createCompanyDto: CreateCompanyDto) {
        return this.companyService.createCompany(createCompanyDto);
    }

    @Get()
    async getCompany(payload: any) {
        return this.companyService.findCompany();
    }

    @Put(':id')
    async updateCompanyById(@Param('id', ParseIntPipe) id: number,
        @Body() updateCompanyDto: UpdateCompanyDto,) {
        await this.companyService.updateCompany(id, updateCompanyDto);
    }

    @Delete(':id')
    async updateDeleteById(@Param('id', ParseIntPipe) id: number) {
        await this.companyService.deleteCompany(id);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
        return ({imagePath: file.path});
    }
}
