import { Router } from 'express';
import * as userController from './user.controller.js';

const routes = Router();

routes.use('./sign-up' , userController.register);
routes.use('./log-in' , userController.login);
// routes.use('/reset-password' , userController);




export default routes;

// es6 