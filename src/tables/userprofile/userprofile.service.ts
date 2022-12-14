import { UserProfileEntity } from './entity/userprofile.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserProfileDto, UpdateProfileDto } from './dto/userprofile.dto';

@Injectable()
export class UserprofileService {
    constructor(@InjectRepository(UserProfileEntity)
    private readonly userRepository: Repository<UserProfileEntity>) { }

    createUser(createUserProfileDto: CreateUserProfileDto) {
        const newUser = this.userRepository.create(createUserProfileDto);
        return this.userRepository.save(newUser);
    }

    findProfile() {
        return this.userRepository.find();
    }

    updateProfile(id: number, updateProfileDetails: UpdateProfileDto) {
        return this.userRepository.update({ id }, { ...updateProfileDetails });
    }

}
