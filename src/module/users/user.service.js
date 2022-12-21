import {User} from './User.model.js';
import {hash} from  '../../utils/encryption.js';
export const register = async(userData)=>{
    try {
        const {password , ...remaining } = userData;

        const hasedPassword = await hash(password)
        console.log(hasedPassword)
        return await User.create({...remaining , password:hasedPassword});
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

