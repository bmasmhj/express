import {User} from './User.model.js';
export const register = async(userData)=>{
    try {
        return await User.create(userData);
    } catch (err) {
        throw err;
    }
};
export const login = (userName, password)=>{
    try {
        console.log(userName, password);
    } catch (err) {
        throw err;
    }
};

