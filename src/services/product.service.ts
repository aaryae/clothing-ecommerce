import Product from "../models/product.model";

class productService {

  async getAllMenProducts(page: number, perpage: number) {
    const data = await Product.find({ category: 'MEN' });
    const total = await Product.countDocuments({ category: 'MEN' })

    return { data, total }
  }

  async getAllWomenProducts(page: number, perpage: number) {
    const data = await Product.find({ category: 'WOMEN' });
    const total = await Product.countDocuments({ category: ' WOMEN' });

    return { data, total }
  }

    async getById(id: string) {
      console.log(id)
      const product = await Product.findById(id);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    }
  }


export default new productService()

