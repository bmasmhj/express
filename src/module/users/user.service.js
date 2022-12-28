import { hash, compare, jwtSign } from '../../utils/encryption.js';
import { User } from './User.model.js';
import { HttpException } from '../../errors/HttpException.js';
export const register = async (userData) => {
    try {
        const { password, ...remainig } = userData;
        const hashedPassword = hash(password);
        return await User.create({ ...remainig, password: hashedPassword });
    } catch (err) {
        throw err;
    }
};
export const login = async (userName, password) => {
    try {
        const user = await User.findOne({
            where: {
                email: userName
            }
        }).then(user => user.dataValues);
        if (!user) {
            throw new HttpException(422, 'Invalid credentials');
        }
        const isCorrectPassword = compare(password, user.password);
        if (!isCorrectPassword) {
            throw new HttpException(422, 'Invalid credentials');
        }
        return {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            access_token: jwtSign(user)
        };
    } catch (err) {
        throw err;
    }
};

