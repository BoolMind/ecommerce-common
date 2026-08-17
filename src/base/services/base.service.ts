import {
  DeepPartial,
  FindOneOptions,
  FindOptionsOrder,
  FindOptionsRelations,
  FindOptionsWhere,
  ILike,
  QueryDeepPartialEntity,
  Repository,
} from 'typeorm';

import { AppBaseEntity } from '../entities/app-base.entity';

import {
  EntityNotDeletedException,
  EntityNotFoundException,
} from '../../exceptions';

import { PaginationDto, PageDto, PageMetaDto } from '../../dto';

import { handleDatabaseError } from '../../utils';

export abstract class BaseService<
  T extends AppBaseEntity,
  CreateData,
  UpdateData,
> {
  protected constructor(
    protected readonly repository: Repository<T>,
  ) {}

  
  protected relations(): FindOptionsRelations<T> {
    return {};
  }

  protected searchableFields(): (keyof T)[] {
    return [];
  }

  protected entityName(): string {
    return 'Resource';
  }


  protected createNotFoundException(id: number): Error {
    return new EntityNotFoundException(
      this.entityName(),
      id,
    );
  }


  async create(data: CreateData): Promise<T> {
    try {
      const entity = this.repository.create(
        data as DeepPartial<T>,
      );

      return await this.repository.save(entity);
    } catch (error) {
      handleDatabaseError(
        error,
        this.entityName(),
      );
    }
  }

  async findAll(): Promise<T[]> {
    return this.repository.find({
      relations: this.relations(),
    });
  }

  async findOne(
    options: FindOneOptions<T>,
  ): Promise<T | null> {
    return this.repository.findOne(options);
  }

 
  async findOneOrFail(
    id: number,
    options?: Omit<FindOneOptions<T>, 'where'>,
  ): Promise<T> {
    const entity = await this.repository.findOne({
      ...options,
      where: {
        id,
      } as FindOptionsWhere<T>,
      relations:
        options?.relations ?? this.relations(),
    });

    if (!entity) {
      throw this.createNotFoundException(id);
    }

    return entity;
  }

  async findMany(
    where: FindOptionsWhere<T>,
    relations?: FindOptionsRelations<T>,
  ): Promise<T[]> {
    return this.repository.find({
      where,
      relations: relations ?? this.relations(),
    });
  }

  async update(
    id: number,
    data: UpdateData,
  ): Promise<T> {
    await this.findOneOrFail(id);

    try {
      await this.repository.update(
        id,
        data as QueryDeepPartialEntity<T>,
      );
    } catch (error) {
      handleDatabaseError(
        error,
        this.entityName(),
      );
    }

    return this.findOneOrFail(id);
  }

 
  async delete(id: number): Promise<void> {
    await this.findOneOrFail(id);

    try {
      await this.repository.delete(id);
    } catch (error) {
      handleDatabaseError(
        error,
        this.entityName(),
      );
    }
  }

  async softDelete(id: number): Promise<T> {
    await this.findOneOrFail(id);

    try {
      await this.repository.softDelete(id);
    } catch (error) {
      handleDatabaseError(
        error,
        this.entityName(),
      );
    }

    const deletedEntity = await this.repository.findOne({
      where: {
        id,
      } as FindOptionsWhere<T>,
      withDeleted: true,
      relations: this.relations(),
    });

    if (!deletedEntity) {
      throw this.createNotFoundException(id);
    }

    return deletedEntity;
  }

  async restore(id: number): Promise<T> {
    const entity = await this.repository.findOne({
      where: {
        id,
      } as FindOptionsWhere<T>,
      withDeleted: true,
      relations: this.relations(),
    });

    if (!entity) {
      throw this.createNotFoundException(id);
    }

    if (!entity.deletedAt) {
      throw new EntityNotDeletedException(
        this.entityName(),
        id,
      );
    }

    try {
      await this.repository.restore(id);
    } catch (error) {
      handleDatabaseError(
        error,
        this.entityName(),
      );
    }

    return this.findOneOrFail(id);
  }

  async paginate(
    query: PaginationDto,
  ): Promise<PageDto<T>> {
    const {
      page,
      limit,
      search,
      order = 'DESC',
      orderBy,
    } = query;

    const skip = (page - 1) * limit;

    const where = this.buildSearchWhere(search);

    const [items, totalItems] =
      await this.repository.findAndCount({
        where,
        relations: this.relations(),
        skip,
        take: limit,
        order: orderBy
          ? ({
              [orderBy]: order,
            } as FindOptionsOrder<T>)
          : undefined,
      });

    return new PageDto(
      items,
      new PageMetaDto({
        page,
        limit,
        totalItems,
      }),
    );
  }

  protected buildSearchWhere(
    search?: string,
  ): FindOptionsWhere<T>[] | undefined {
    const fields = this.searchableFields();

    if (!search || fields.length === 0) {
      return undefined;
    }

    return fields.map(
      (field) =>
        ({
          [field]: ILike(`%${search}%`),
        }) as FindOptionsWhere<T>,
    );
  }
}