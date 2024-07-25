import express from 'express';
import { ROLE } from '../constant/enum';
import { authentication } from '../middleware/authentication.middleware';
import { authorization } from '../middleware/authorization.middleware';
import { catchAsync } from '../utils/catchAsync.utils';
import adminController from '../controllers/admin.controller';

const router = express.Router();

router.use(authentication());
router.use(authorization([ROLE.ADMIN]));

const AdminController = new adminController();

router.get('/', catchAsync(AdminController.getAll));
router.post('/',catchAsync(AdminController.addProduct));
router.delete('/:id', catchAsync(AdminController.deleteUser));

export default router;