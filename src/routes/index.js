import { Router } from 'express';
import route from './v1/index.js';


const routes = Router();

routes.use('/v1' , route)

routes.get('/', (req, res , next ) => {
    // res.send('hello world')
    res.json({status : true , message : 'Sever is alives'})
})

export default routes;

// es6 