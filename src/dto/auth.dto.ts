import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { passwordRegex } from '../constant/regex';

export class CreateUserDTO {
    @IsNotEmpty()
    @Length(5, 30)
    name!: string;

    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    @Matches(passwordRegex, {
        message:
            'Password must contain at least one uppercase letter and one lowercase letter',
    })
    password!: string;

   
}

export class LoginUserDTO {
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    @Matches(passwordRegex, {
        message:
            'Password must contain at least one uppercase letter and one lowercase letter',
    })
    password!: string;
}
