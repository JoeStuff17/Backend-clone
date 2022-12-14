import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCompanyDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    sub: string;

    @IsNotEmpty()
    source: string;

}

export class UpdateCompanyDto{
    name: string;
    sub: string;
    source: string;
}