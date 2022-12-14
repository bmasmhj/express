import {userService} from '../../Service/index.js';

export const register = (req , res, next) =>{
    try{
        const {name , address , phone_num , password , email } = req.body;
        // console.log(name , address , phone_num , password , email );
        userService.register({name , address , phone_num , password , email});
    }
    catch (err){
        next(err);
    }
}

export const login = (req , res, next) =>{
    try{
        const {user_name , password } = req.body;

        // console.log(user_name , password );
    }
    catch (err){
        nexy(err);
    }
}