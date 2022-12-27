import bcrypt from "bcryptjs";
import jwt  from 'jsonwebtoken';

export const hash = (password) => bcrypt.hashSync(password , 10);

export const compare = (password , hashedPassword) => bcrypt.compareSync(password , hashedPassword );

export const jwtSign = (user) => {
    const options = { expiresIn : '12hr'};
    return jwt.sign({
        id:user.id,
        first_name : user.first_name,
        email : user.email,
        phone_number : user.phone_number,
        active : user.active,
    },
    'secretKey',options
    );
};

export const decode = (token) => jwt.verify(token , 'secretKey');