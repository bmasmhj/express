import {User} from './User.model.js';
import {compare , hash} from  '../../utils/encryption.js';
import { jwtSign } from '../../utils/encryption.js';
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
export const login = async (userName, password) => {
    try {
        const user = await User.findOne({
            where : {
                email: userName
            }
        }).then(user=> user.dataValues);
        console.log(user);
        if (!user) {
            throw Error('Invalid credentials')
        }
        const isCorrectPassword = compare(password, user.password);
        if (!isCorrectPassword) {
            throw Error('Invalid credentials')
        }
        return {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            acess_token: jwtSign(user),

        }
    } catch (err) {
        throw err;
    }
};


