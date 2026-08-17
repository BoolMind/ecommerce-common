"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const typeorm_1 = require("typeorm");
const exceptions_1 = require("../../exceptions");
const dto_1 = require("../../dto");
const utils_1 = require("../../utils");
class BaseService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    relations() {
        return {};
    }
    searchableFields() {
        return [];
    }
    entityName() {
        return 'Resource';
    }
    createNotFoundException(id) {
        return new exceptions_1.EntityNotFoundException(this.entityName(), id);
    }
    async create(data) {
        try {
            const entity = this.repository.create(data);
            return await this.repository.save(entity);
        }
        catch (error) {
            (0, utils_1.handleDatabaseError)(error, this.entityName());
        }
    }
    async findAll() {
        return this.repository.find({
            relations: this.relations(),
        });
    }
    async findOne(options) {
        return this.repository.findOne(options);
    }
    async findOneOrFail(id, options) {
        const entity = await this.repository.findOne({
            ...options,
            where: {
                id,
            },
            relations: options?.relations ?? this.relations(),
        });
        if (!entity) {
            throw this.createNotFoundException(id);
        }
        return entity;
    }
    async findMany(where, relations) {
        return this.repository.find({
            where,
            relations: relations ?? this.relations(),
        });
    }
    async update(id, data) {
        await this.findOneOrFail(id);
        try {
            await this.repository.update(id, data);
        }
        catch (error) {
            (0, utils_1.handleDatabaseError)(error, this.entityName());
        }
        return this.findOneOrFail(id);
    }
    async delete(id) {
        await this.findOneOrFail(id);
        try {
            await this.repository.delete(id);
        }
        catch (error) {
            (0, utils_1.handleDatabaseError)(error, this.entityName());
        }
    }
    async softDelete(id) {
        await this.findOneOrFail(id);
        try {
            await this.repository.softDelete(id);
        }
        catch (error) {
            (0, utils_1.handleDatabaseError)(error, this.entityName());
        }
        const deletedEntity = await this.repository.findOne({
            where: {
                id,
            },
            withDeleted: true,
            relations: this.relations(),
        });
        if (!deletedEntity) {
            throw this.createNotFoundException(id);
        }
        return deletedEntity;
    }
    async restore(id) {
        const entity = await this.repository.findOne({
            where: {
                id,
            },
            withDeleted: true,
            relations: this.relations(),
        });
        if (!entity) {
            throw this.createNotFoundException(id);
        }
        if (!entity.deletedAt) {
            throw new exceptions_1.EntityNotDeletedException(this.entityName(), id);
        }
        try {
            await this.repository.restore(id);
        }
        catch (error) {
            (0, utils_1.handleDatabaseError)(error, this.entityName());
        }
        return this.findOneOrFail(id);
    }
    async paginate(query) {
        const { page, limit, search, order = 'DESC', orderBy, } = query;
        const skip = (page - 1) * limit;
        const where = this.buildSearchWhere(search);
        const [items, totalItems] = await this.repository.findAndCount({
            where,
            relations: this.relations(),
            skip,
            take: limit,
            order: orderBy
                ? {
                    [orderBy]: order,
                }
                : undefined,
        });
        return new dto_1.PageDto(items, new dto_1.PageMetaDto({
            page,
            limit,
            totalItems,
        }));
    }
    buildSearchWhere(search) {
        const fields = this.searchableFields();
        if (!search || fields.length === 0) {
            return undefined;
        }
        return fields.map((field) => ({
            [field]: (0, typeorm_1.ILike)(`%${search}%`),
        }));
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map