import { Router } from 'express';
import validateToken from '../../middlewares/validateToken.js';
import * as categoryController from './category.controller.js';

const router = Router();

router.post('/', validateToken, categoryController.create);

router.post('/list', categoryController.list);

router.put('/:id', validateToken, categoryController.update);

router.get('/:id', categoryController.findById);

// router.post('/list', categoryController.list);

export default router;
