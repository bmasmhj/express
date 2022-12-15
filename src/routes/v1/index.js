import { Router } from 'express';
import userRoute from '../../module/users/user.route.js'
const route = Router();

route.get('/', (req, res , next ) => {
    // res.send('hello world')
    res.json({status : true , message : 'Sever is v1'})
})
route.post('./auth', userRoute);


export default route;

// es6 