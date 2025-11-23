"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBooks = fetchBooks;
function fetchBooks() {
    return Promise.resolve([
        { id: 1, title: "1984", author: "George Orwell", year: 1949, available: true },
        { id: 2, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", year: 1943, available: true },
        { id: 3, title: "Harry Potter", author: "J.K. Rowling", year: 1997, available: true },
    ]);
}
//# sourceMappingURL=api.js.map