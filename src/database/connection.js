import { Sequelize } from 'sequelize';
const DB_NAME = 'express'; 
const DB_USER = 'postgres'; 
const DB_PASSOWRD = '9840705412'; 
const DB_HOST = 'localhost'; 
const DB_DIALECT = 'postgres'; 

// Database connection
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSOWRD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging : false
});