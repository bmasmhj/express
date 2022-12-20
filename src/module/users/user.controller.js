import { userService } from '../../service/index.js';
export const register = async(req, res, next) => {
    try {
        const { first_name, last_name , email, password } = req.body;
        const registeredUser = await userService.register({ first_name, last_name, password, email });
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
