import { Book } from "../models/Book.js";
import { Repository } from "./Repository.js";

export class Library {
  constructor(public booksRepo: Repository<Book>) {}

  addBook(book: Book) {
    this.booksRepo.add(book);
  }

  removeBook(id: number) {
    this.booksRepo.remove(id);
  }

  searchByTitle(title: string): Book[] {
    return this.booksRepo.getAll().filter(book =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  borrowBook(id: number): boolean {
    const book = this.booksRepo.getById(id);
    if (book && book.available) {
      book.available = false;
      return true;
    }
    return false;
  }

  returnBook(id: number): boolean {
    const book = this.booksRepo.getById(id);
    if (book && !book.available) {
      book.available = true;
      return true;
    }
    return false;
  }
}