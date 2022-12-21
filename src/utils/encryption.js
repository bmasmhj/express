import bcrypt from "bcryptjs";

export const hash = (password) => bcrypt.hashSync(password , 10);