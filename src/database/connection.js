import { Sequelize } from 'sequelize';
const DB_NAME = 'node_express'; 
const DB_USER = 'sumantimsina'; 
const DB_PASSOWRD = 'easypassword'; 
const DB_HOST = 'localhost'; 
const DB_DIALECT = 'postgres'; 

// Database connection
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSOWRD, {
    host: DB_HOST,
    dialect: DB_DIALECT 
});


// 
const response = {
    status: 'success',
    code: 200,
    data:[]
}
