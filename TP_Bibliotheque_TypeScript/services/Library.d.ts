import { Book } from "../models/Book.js";
import { Repository } from "./Repository.js";
export declare class Library {
    booksRepo: Repository<Book>;
    constructor(booksRepo: Repository<Book>);
    addBook(book: Book): void;
    removeBook(id: number): void;
    searchByTitle(title: string): Book[];
    borrowBook(id: number): boolean;
    returnBook(id: number): boolean;
}
//# sourceMappingURL=Library.d.ts.map