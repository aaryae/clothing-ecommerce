import { type Request, type Response } from 'express';
import { StatusCodes } from '../constant/statusCodes';
import adminService from '../services/admin.service';
import { getPaginationData, paginationValidator } from '../utils/pagination';
import productService from '../services/product.service';
import { Message } from '../constant/messages';

class productController {
    async menProducts(req: Request, res: Response) {
        const [page, perpage] = paginationValidator(
            req.query.page as string,
            req.query.perpage as string
        );
        const response = await productService.getAllMenProducts(page, perpage);
        res.status(StatusCodes.SUCCESS).json({
            success: true,
            message: 'Fetch Successful',
            data: {
                data: response.data,
                pagination: getPaginationData(response.total, page, perpage),
            },
        });
    }
    async womenProducts(req: Request, res: Response) {
        const [page, perpage] = paginationValidator(
            req.query.page as string,
            req.query.perpage as string
        );
        const response = await productService.getAllWomenProducts(page, perpage);
        res.status(StatusCodes.SUCCESS).json({
            success: true,
            message: 'Fetch Successful',
            data: {
                data: response.data,
                pagination: getPaginationData(response.total, page, perpage),
            },
        });
    }
    

    async getById(req:Request , res:Response){
            const data = await productService.getById(req.params.id)
            res.status(StatusCodes.SUCCESS).json({
              status: true,
              data,
              message: Message.fetched,
            })
          
    }


}

export default productController;
