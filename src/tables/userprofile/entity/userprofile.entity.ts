import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'userprofile' })

export class UserProfileEntity {

    @PrimaryGeneratedColumn()
    id: number;

    // @Column({ type:'simple-json'})
    // personal_details: any[];
    
    @Column()
    name: string;

    @Column()
    dob: string;    
    
    @Column()
    phone: string;
    
    @Column()
    email: string;
    
    @Column()
    Qualification: string;

    @Column()
    interests: string;

    @Column({nullable:true})
    tags: string;

    @Column()
    organization: string;

    @Column()
    skills: string;

    @Column({nullable:true})
    followers: number;

    @Column({nullable:true})
    followings: number;

    @Column({default: 'https://www.sony.eu/alphauniverse/assets/resized/2020/10/Julien-Mauve-profile_square_291x291.jpg'})
    profileImage: string;

    @Column({default: 'https://i.pinimg.com/originals/e9/cb/9c/e9cb9cdbc8fcf90a1c182f1e365e723d.jpg'})
    bgImage: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @Column({nullable:true})
    slugs: string;

    @Column()
    location: string;
}