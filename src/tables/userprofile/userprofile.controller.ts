import { UserprofileService } from './userprofile.service';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserProfileDto, UpdateProfileDto } from './dto/userprofile.dto';

@Controller('userprofile')
export class UserprofileController {
    constructor(private readonly userprofileService: UserprofileService) { }

    @Post('/')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserProfileDto: CreateUserProfileDto) {
        // createUserProfileDto.profileImage = createUserProfileDto.profileImage ? createUserProfileDto.profileImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAOn8H2ZmGrPf8tk69GWZuY8RvmnvC9svCw&usqp=CAU';
        return this.userprofileService.createUser(createUserProfileDto)
    }

    @Get('/')
    async getProfile() {
        return this.userprofileService.findProfile();
    }

    @Put(':id')
    async updateProfileById(@Param('id', ParseIntPipe) id: number,
        @Body() updateProfileDto: UpdateProfileDto,) {
        const updated = await this.userprofileService.updateProfile(id, updateProfileDto);
        return {
            success: updated.affected,
            message: updated.affected ? 'Updated successfully' : 'Error'
        }
    }
}
