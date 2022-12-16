import { Router } from 'express';
import userRoute from '../../module/users/user.route.js';

const router = Router();

router.use('/auth',userRoute)

export default router;