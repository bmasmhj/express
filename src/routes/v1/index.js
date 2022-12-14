import { Router } from 'express';
import userRoute from '../../module/users/user.route.js'
const route = Router();

// route.use('/',(req, res, next)=>{
//     res.json({data:req.body})
// })

route.post('./auth', userRoute);


export default route;

// es6 