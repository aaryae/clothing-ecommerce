import { Router } from 'express';
import { catchAsync } from '../utils/catchAsync.utils';
import productController from '../controllers/product.controller';

const ProductController = new productController();
const router = Router();

router.get(
    '/menproducts',
    catchAsync(ProductController.menProducts)
);

router.get(
    '/womenproducts',
    catchAsync(ProductController.womenProducts)
);

router.get(
    '/:id',
    catchAsync(ProductController.getById)
)

export default router;
