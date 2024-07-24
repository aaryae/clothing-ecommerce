import mongoose, { Schema } from 'mongoose';
import { ROLE } from '../constant/enum';
import { Message } from '../constant/messages';
import {
    emailAddressRegex,
    passwordRegex
} from '../constant/regex';
import { IUser } from '../interface/user.interface';


const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [emailAddressRegex, Message.validEmailAddress],
        },
        password: {
            type: String,
            required: true,
            match: [passwordRegex, Message.passwordShouldStrong],
        },
        role: {
            type: String,
            enum: Object.values(ROLE),
            default: ROLE.USER,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
