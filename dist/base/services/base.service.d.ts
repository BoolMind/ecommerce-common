import { FindOneOptions, FindOptionsRelations, FindOptionsWhere, Repository } from 'typeorm';
import { AppBaseEntity } from '../entities/app-base.entity';
import { PaginationDto, PageDto } from '../../dto';
export declare abstract class BaseService<T extends AppBaseEntity, CreateData, UpdateData> {
    protected readonly repository: Repository<T>;
    protected constructor(repository: Repository<T>);
    protected relations(): FindOptionsRelations<T>;
    protected searchableFields(): (keyof T)[];
    protected entityName(): string;
    protected createNotFoundException(id: number): Error;
    create(data: CreateData): Promise<T>;
    findAll(): Promise<T[]>;
    findOne(options: FindOneOptions<T>): Promise<T | null>;
    findOneOrFail(id: number, options?: Omit<FindOneOptions<T>, 'where'>): Promise<T>;
    findMany(where: FindOptionsWhere<T>, relations?: FindOptionsRelations<T>): Promise<T[]>;
    update(id: number, data: UpdateData): Promise<T>;
    delete(id: number): Promise<void>;
    softDelete(id: number): Promise<T>;
    restore(id: number): Promise<T>;
    paginate(query: PaginationDto): Promise<PageDto<T>>;
    protected buildSearchWhere(search?: string): FindOptionsWhere<T>[] | undefined;
}
