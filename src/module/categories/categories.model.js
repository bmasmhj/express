import { Sequelize, Model, DataTypes }  from 'sequelize';
import {sequelize} from '../../database/connection.js'

export const User = sequelize.define("user", {
  first_name : {
     type : DataTypes.STRING,
     allowNull : false,
  },
    last_name : {
     type : DataTypes.STRING,
  } ,
    email : {
     type : DataTypes.STRING,
     allowNull : false,
  } ,
    password : {
     type : DataTypes.STRING,
     allowNull : false,
  } 
  
});