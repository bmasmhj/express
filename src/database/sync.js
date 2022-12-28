import { User } from '../module/users/User.model.js';
import { Category } from '../module/categories/Category.model.js';
import { Product } from '../module/product/Product.model.js';


export const syncModels = async () => {
    await User.sync();
    await Category.sync();
    await Product.sync();

}
