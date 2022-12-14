import { Router } from 'express';
import route from './v1/index.js';


const routes = Router();

routes.use('/v1' , route)


export default routes;

// es6 