import { Router } from 'express';
import {userController} from '../../controller/index.js';

const router = Router();

router.post('/sign-up', userController.register);

router.post('/log-in', userController.login);

export default router;