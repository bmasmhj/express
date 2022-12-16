import { userService } from '../../service/index.js';
export const register = (req, res, next) => {
    try {
        const { name, addres, phone_number, password, email } = req.body;
        const registeredUser = userService.register({ name, addres, phone_number, password, email });
        return res.json(registeredUser);
    } catch (err) {
        next(err);
    }
};
export const login = (req, res, next) => {
    try {
        const { password, user_name } = req.body;
    } catch (err) {
        next(err);

    }
};
