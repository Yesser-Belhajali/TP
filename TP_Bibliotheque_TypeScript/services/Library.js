"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    booksRepo;
    constructor(booksRepo) {
        this.booksRepo = booksRepo;
    }
    addBook(book) {
        this.booksRepo.add(book);
    }
    removeBook(id) {
        this.booksRepo.remove(id);
    }
    searchByTitle(title) {
        return this.booksRepo.getAll().filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }
    borrowBook(id) {
        const book = this.booksRepo.getById(id);
        if (book && book.available) {
            book.available = false;
            return true;
        }
        return false;
    }
    returnBook(id) {
        const book = this.booksRepo.getById(id);
        if (book && !book.available) {
            book.available = true;
            return true;
        }
        return false;
    }
}
exports.Library = Library;
//# sourceMappingURL=Library.js.map