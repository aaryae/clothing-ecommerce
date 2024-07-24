import { DotenvConfig } from '../config/env.config';
import { ROLE } from './enum';

export const admins = {
    name: 'Admin',
    email: 'admin1@admin.com',
    phone: '9843818516',
    password: DotenvConfig.ADMIN_PASSWORD,
    role: ROLE.ADMIN,
};
