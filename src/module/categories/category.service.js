import { Category } from './Category.model.js';
import { HttpException } from '../../errors/HttpException';
import { Sequelize } from 'sequelize';

export const create = async (categoryData) => {
    try {
        const isExist = await validateUnique(categoryData.name);
        if (isExist && isExist.length) {
            throw new HttpException(
                409,
                'Category already exist with same name'
            );
        }
        return await Category.create(categoryData);
    } catch (err) {
        throw err;
    }
};

export const list = async (pagination, search_text) => {
    try {
        const rows = await Category.findAll({
            where: {
                is_deleted: false,
                name: {
                    [Sequelize.Op.iLike]: `%${search_text}%`,
                },
            },
            limit: pagination.limit,
            offset: pagination.offset,
        });
        const count = await Category.count({
            where: {
                is_deleted: false,
                name: {
                    [Sequelize.Op.iLike]: `%${search_text}%`,
                },
            },
        });
        console.log(rows,count);
        return { rows, count };
    } catch (err) {
        throw err;
    }
};

export const findById = async (id) => {
    try {
        return await Category.findById(id);
    } catch (err) {
        throw err;
    }
};

export const update = async (id, updateData) => {
    try {
        return await Category.findById(id);
    } catch (err) {
        throw err;
    }
};
const validateUnique = async (name, id = null) => {
    try {
        return await Category.findAll({
            where: {
                name,
                is_deleted: false,
            },
        });
    } catch (err) {
        throw err;
    }
};
