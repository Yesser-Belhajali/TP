export declare class Repository<T extends {
    id: number;
}> {
    private items;
    add(item: T): void;
    remove(id: number): void;
    getAll(): T[];
    getById(id: number): T | undefined;
}
//# sourceMappingURL=Repository.d.ts.map