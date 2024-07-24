import { ROLE } from '../constant/enum';



export interface IUser {
    name: string;
    email: string;
    password: string;
    role?: ROLE;
}

export interface ILogin {
    email: string;
    password: string;
}
