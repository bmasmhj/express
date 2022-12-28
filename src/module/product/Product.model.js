import { Sequelize, DataTypes } from 'sequelize';
import { Category } from '../categories/Category.model.js';
import { User } from '../users/User.model.js';
import { sequelize } from '../../database/connection.js';

export const Product = sequelize.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    dimension: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    colors: {
        type: DataTypes.JSONB,
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
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    caregory_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
          },
          referencesKey: 'id'
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