import { Component } from '@angular/core';
import { Book } from '../book';
import { BookFormComponent } from '../book-form/book-form';
import { BookListComponent } from '../book-list/book-list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule, FormsModule, BookFormComponent, BookListComponent],
  templateUrl: './book-container.html',
  styleUrls: ['./book-containercss']
})
export class BookContainerComponent {
  books: Book[] = [
    { id: 1, title: 'Angular Basics', author: 'John Doe', publisherEmail: 'john@example.com', publisherPhone: '12345678', releaseDate: '2020-01-01', category: 'Informatique', isAvailable: true, stock: 5 },
    { id: 2, title: 'History 101', author: 'Jane Smith', publisherEmail: 'jane@example.com', publisherPhone: '87654321', releaseDate: '2019-05-10', category: 'Histoire', isAvailable: false, stock: 3 },
  ];

  categories = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  editingBook: Book | null = null;

  addBook(book: Book) {
    if (!book.id) book.id = this.books.length ? Math.max(...this.books.map(b => b.id)) + 1 : 1;
    this.books.push(book);
  }

  updateBook(book: Book) {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) this.books[index] = { ...book };
    this.editingBook = null;
  }

  editBook(book: Book) {
    this.editingBook = { ...book }; // précharger le formulaire
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }
}
