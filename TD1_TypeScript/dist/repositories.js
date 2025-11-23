"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.items = [];
    }
    add(item) {
        if (this.items.some(u => u.id === item.id)) {
            throw new Error(`User with id ${item.id} already exists.`);
        }
        this.items.push(item);
    }
    remove(id) {
        this.items = this.items.filter(u => u.id !== id);
    }
    getAll() {
        return [...this.items];
    }
    getById(id) {
        return this.items.find(u => u.id === id);
    }
}
exports.UserRepository = UserRepository;
