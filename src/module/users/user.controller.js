import { userService } from '../../service/index.js';
import responseHandler from '../../utils/responseHandler.js';
export const register = async (req, res, next) => {
    try {
        const { first_name, last_name, addres, phone_number, password, email } = req.body;
        const registeredUser = await userService.register({ first_name, last_name, addres, phone_number, password, email });
        return res.json(responseHandler(registeredUser));
    } catch (err) {
        next(err);
    }
};
export const login = async (req, res, next) => {
    try {
        const { password, email } = req.body;
        const user = await userService.login(email, password);
        return res.json(responseHandler(user));
    } catch (err) {
        next(err);
    }
};
