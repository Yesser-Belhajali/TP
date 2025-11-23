import { User } from "./models";

export interface Repository<T> {
  add(item: T): void;
  remove(id: number): void;
  getAll(): T[];
  getById?(id: number): T | undefined;
}

export class UserRepository implements Repository<User> {
  private items: User[] = [];

  add(item: User): void {
    if (this.items.some(u => u.id === item.id)) {
      throw new Error(`User with id ${item.id} already exists.`);
    }
    this.items.push(item);
  }

  remove(id: number): void {
    this.items = this.items.filter(u => u.id !== id);
  }

  getAll(): User[] {
    return [...this.items];
  }

  getById(id: number): User | undefined {
    return this.items.find(u => u.id === id);
  }
}