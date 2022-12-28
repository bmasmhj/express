import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../database/connection.js';

export const User = sequelize.define('user', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_admin:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  active:{
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  is_deleted:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  createdAt: { type: Sequelize.DATE, field: 'created_at' },
  updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
}, {
  // Other model options go here
  timestamps: true,
  underscored: true,
  freezeTableName: true,
});