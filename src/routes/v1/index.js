import { Router } from 'express';
// import validateToken from '../../middlewares/validateToken.js';
import userRoute from '../../module/users/user.route.js';
import categoryRoute from '../../module/categories/category.route.js';

const router = Router();

router.use('/auth', userRoute);

router.use('/category', categoryRoute);

export default router;