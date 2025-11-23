"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    remove(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
    getAll() {
        return this.items;
    }
    getById(id) {
        return this.items.find(item => item.id === id);
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map