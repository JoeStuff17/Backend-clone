import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserProfileDto{
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    dob: string;
    
    @IsNotEmpty()
    phone: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    Qualification: string;

    @IsNotEmpty()
    interests: string;
    

}

export class UpdateProfileDto{
    name: string;
    dob: string;
    phone: string;
    email: string;
    Qualification: string;
    interests: string;
    tags: string;
    organization: string;
    skills: string;
    followers: number;
    followings: number;
    profileImage: string;
    bgImage: string;
    slugs: string;
    location: string;
    
}