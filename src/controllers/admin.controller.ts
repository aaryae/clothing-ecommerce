import { type Request, type Response } from 'express';
import { StatusCodes } from '../constant/statusCodes';
import { getPaginationData, paginationValidator } from '../utils/pagination';
import adminService from '../services/admin.service';
import authService from '../services/auth.service';

class adminController {
    async getAll(req: Request, res: Response) {
        const [page, perpage] = paginationValidator(
            req.query.page as string,
            req.query.perpage as string
        );
        const response = await adminService.getAll(page, perpage);
        res.status(StatusCodes.SUCCESS).json({
            success: true,
            message: 'Fetch Successful',
            data: {
                data: response.data,
                pagination: getPaginationData(response.total, page, perpage),
            },
        });
    }


  async addProduct(req:Request , res: Response){
    const response= await adminService.addProducts(req.body)
    res.status(StatusCodes.CREATED).json({
        sucess:true,
        message:'Created Successfully',
        data:response,
    })
  }

    async deleteUser(req: Request, res: Response) {
        await adminService.deleteUser(req.params.id);
        res.status(StatusCodes.SUCCESS).json({
            success: true,
            message: 'User Deletion Successful',
        });
    }
}

export default adminController;
