import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../database/connection.js';
import { User } from '../users/User.model.js';

export const Category = sequelize.define('category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  thumbnail: {
    type: DataTypes.JSONB,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  created_by: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    referencesKey: 'id'
  },
  updated_by: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    referencesKey: 'id'
  },
  createdAt: { type: Sequelize.DATE, field: 'created_at' },
  updatedAt: { type: Sequelize.DATE, field: 'updated_at' },
}, {
  // Other model options go here
  timestamps: true,
  underscored: true
});
