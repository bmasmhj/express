import responseHandler from '../../utils/responseHandler.js';
import * as categoryService from './category.service.js';
export const create = async (req, res, next) => {
    try {
        const { name } = req.body;
        return await categoryService.create({ name, created_by: req.user.id });
    } catch (err) {
        next(err);
    }
};

export const list = async (req, res, next) => {
    try {
        const { pagination, search_text } = req.body;
        const categories =  await categoryService.list(pagination, search_text);
        return res.json(responseHandler(categories));
    } catch (err) {
        next(err);
    }
};

export const findById = async (req, res, next) => {
    try {
        const { id } = req.params;
        return await categoryService.findById(id);
    } catch (err) {
        next(err);
    }
};

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        return await categoryService.update(id, { name });
    } catch (err) {
        next(err);
    }
};
