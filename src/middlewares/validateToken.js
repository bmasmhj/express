import { decode } from '../utils/encryption.js';
import NotAuthorizedError from '../errors/NotAuthorizedError.js';

export default async (req, res, next) => {
  let token;

  if (req.headers['authorization']) {
    token = req.headers['authorization'];
  }

  if (!token) {
    return next(new NotAuthorizedError());
  }
  try {
    if (!token.startsWith('Bearer')) {
      return next(new NotAuthorizedError());
    }

    token = token.split(' ')[1];

    const decoded = decode(token);
    req.user = decoded;

    return next();
  } catch (err) {
    return next(new NotAuthorizedError());
  }
};
