import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hash = (password) => bycrypt.hashSync(password, 10);

export const compare = (password, hashedPassword) => bycrypt.compareSync(password, hashedPassword);

export const jwtSign = (user) => {
    const options = { expiresIn: '12hr' };
    return jwt.sign(
        {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phone_number: user.phone_number,
            active: user.active,
        },
        'process.env.secret',
        options
    );
};
export const decode = (token) =>
    jwt.verify(token, 'process.env.secret');
