import { Schema, model, Document } from 'mongoose';
import { IProduct } from '../interface/product.interface';
import { CATEGORY } from '../constant/enum';


// Create a Schema corresponding to the document interface.
const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: CATEGORY,
  }
},{
    timestamps:true,
});

// Create a Model.
const Product = model<IProduct>('Product', productSchema);

export default Product;
